import React, {useContext, useState} from 'react';
import {advices, IAdvice, Tag} from '../models/advices';
import {LanguageContext} from '../contexts/language';
import './Advices.scss';
import {adviceBackgrounds} from "../models/advice-backgrounds";

export const Advices: React.FC = () => {
  const getRandomAdviceId = (exceptIds: number[], exceptWithTag?: Tag): number => {
    const filteredAdvices = advices.filter(advice => !exceptIds.includes(advice.id) && (!exceptWithTag || !advice.tags.includes(exceptWithTag)));
    return filteredAdvices[Math.floor(Math.random()*filteredAdvices.length)].id;
  };

  const alreadyActivatedAdviceIds: number[] = [];
  const [activeAdviceId, setActiveAdviceId] = useState(getRandomAdviceId(alreadyActivatedAdviceIds));
  alreadyActivatedAdviceIds.push(activeAdviceId);

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

  // const getAlreadyActivatedAdviceIndex = (id: number): number => {
  //   return alreadyActivatedAdviceIds.findIndex(adviceId => adviceId === id);
  // };
  // const nextAdvice = () => {
  //   const activeAdviceIndex = getAlreadyActivatedAdviceIndex(activeAdviceId);
  //   if (activeAdviceIndex + 1 < alreadyActivatedAdviceIds.length) {
  //     setActiveAdviceId(alreadyActivatedAdviceIds[activeAdviceIndex + 1]);
  //   } else {
  //     const addAdviceId = getRandomAdviceId(alreadyActivatedAdviceIds, getAdvice(activeAdviceId).tags[0]);
  //     alreadyActivatedAdviceIds.push(addAdviceId);
  //     setActiveAdviceId(addAdviceId);
  //   }
  // };
  // const prevAdvice = () => {
  //   const activeAdviceIndex = getAlreadyActivatedAdviceIndex(activeAdviceId);
  //   if (activeAdviceIndex - 1 >= 0) {
  //     setActiveAdviceId(activeAdviceIndex - 1);
  //   }
  // };

  const language = useContext(LanguageContext);

  return <div className="advice__container relative h-100 w-100 flex flex-center">
    <div
    className="advice__background absolute top-0 left-0 w-100 h-100"
    style={{backgroundImage: `url("./advice-backgrounds/${getBackgroundSrc(getAdvice(activeAdviceId).tags[0])}")`}}/>

    <div className="advice relative z-1 p-4 flex-column radius-solid">
      <div className="advice__box-background absolute top-0 left-0 w-100 h-100 bg-background"></div>

      <div className="relative z-1">
        <p className="left line-3">
          {getAdvice(activeAdviceId).text[language]}
        </p>
        {/*<div className="flex">*/}
        {/*  {getAlreadyActivatedAdviceIndex(activeAdviceId) !== 0 ?*/}
        {/*      <button className="advice-nav prev-advice" onClick={prevAdvice}>Previous</button> : null}*/}
        {/*  <button className="advice-nav next-advice ml-a" onClick={nextAdvice}>Next Advice</button>*/}
        {/*</div>*/}
      </div>
    </div>
  </div>;
};
