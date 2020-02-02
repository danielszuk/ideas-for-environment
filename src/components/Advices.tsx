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
      // if there is a last advice, force the new advice from an other tag
      let lastAdviceTag: Tag | undefined;
      if (alreadyActivatedAdviceIds.length) {
        const lastAdvice = getAdvice(alreadyActivatedAdviceIds[alreadyActivatedAdviceIds.length - 1]);
        lastAdviceTag = lastAdvice.tags[0];
      }

      let randomAdviceId = getRandomAdviceId(alreadyActivatedAdviceIds, lastAdviceTag);
      // If there is no advice to display (we displayed all, all we can't display an other with different Tag)
      // start it again
      if (randomAdviceId === undefined) {
        alreadyActivatedAdviceIds = [];
        randomAdviceId = getRandomAdviceId(alreadyActivatedAdviceIds, lastAdviceTag);
      }
      const advice = getAdvice(randomAdviceId!);
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

const getRandomAdviceId = (exceptIds: number[], exceptWithTag?: Tag): number | undefined => {
  const filteredAdvices = advices.filter(advice => !exceptIds.includes(advice.id) && (!exceptWithTag || !advice.tags.includes(exceptWithTag)));
  const randomAdvice = filteredAdvices[Math.floor(Math.random()*filteredAdvices.length)];
  return randomAdvice ? randomAdvice.id : undefined;
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
