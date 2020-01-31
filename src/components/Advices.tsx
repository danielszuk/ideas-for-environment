import React, {useContext, useEffect, useState} from 'react';
import {advices, IAdvice, Tag} from '../models/advices';
import {LanguageContext} from '../contexts/language';
import './Advices.scss';
import {adviceBackgrounds} from "../models/advice-backgrounds";
import {StorageKey} from "../models/storage-keys";
import {storageGet, storageSet} from "../storage";

export const Advices: React.FC = () => {
  const [activeAdvice, setActiveAdvice] = useState<IAdvice | undefined>(undefined);

  useEffect(() => {
    (async () => {
      // load history from storage
      let alreadyActivatedAdviceIds = await storageGet<number[]>(StorageKey.alreadyActivatedAdviceIds) || [];
      // If we already displayed all the advices, start it again
      if (alreadyActivatedAdviceIds.length === advices.length) {
        alreadyActivatedAdviceIds = [];
      }
      // if there is a last advice, force the new advice from an other tag
      let lastAdviceTag: Tag | undefined;
      if (alreadyActivatedAdviceIds.length) {
        const lastAdvice = getAdvice(alreadyActivatedAdviceIds[alreadyActivatedAdviceIds.length - 1]);
        lastAdviceTag = lastAdvice.tags[0];
      }

      let advice = getAdvice(getRandomAdviceId(alreadyActivatedAdviceIds, lastAdviceTag));
      setActiveAdvice(advice);

      // save new advice to history
      storageSet(StorageKey.alreadyActivatedAdviceIds, [...alreadyActivatedAdviceIds, advice.id]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeLanguage = useContext(LanguageContext);

  return activeAdvice ? <div className="advice__container relative h-100 w-100 flex flex-center">
    <div
    className="advice__background absolute top-0 left-0 w-100 h-100"
    style={{backgroundImage: `url("./advice-backgrounds/${getBackgroundSrc(activeAdvice.tags[0])}")`}}/>

    <div className="advice relative z-1 p-4 flex-column">
      <div className="advice__box-background absolute top-0 left-0 w-100 h-100 bg-background radius-1"/>

      <div className="relative z-1">
        <p className="left line-4 size-1 bold">
          {activeAdvice.text[activeLanguage]}
        </p>
      </div>
    </div>
  </div> : <></>;
};

const getRandomAdviceId = (exceptIds: number[], exceptWithTag?: Tag): number => {
  const filteredAdvices = advices.filter(advice => !exceptIds.includes(advice.id) && (!exceptWithTag || !advice.tags.includes(exceptWithTag)));
  return filteredAdvices[Math.floor(Math.random()*filteredAdvices.length)].id;
};

const getAdvice = (id: number): IAdvice => {
  const advice = advices.find(advice => advice.id === id);
  if (!advice) {
    throw new Error(`Advice haven't find with given id: ${id}`);
  }

  return advice;
};

const getBackgroundSrc = (tag: Tag): string => {
  const background = adviceBackgrounds.find(background => background.tag === tag);
  return background ? background.src : "";
};
