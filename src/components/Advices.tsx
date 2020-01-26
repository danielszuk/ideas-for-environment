import React, {useContext, useState} from 'react';
import {advices, IAdvice, Tag} from '../models/advices';
import {LanguageContext} from '../contexts/language';
import './Advices.scss';

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

  const getAlreadyActivatedAdviceIndex = (id: number): number => {
    return alreadyActivatedAdviceIds.findIndex(adviceId => adviceId === id);
  };
  const nextAdvice = () => {
    const activeAdviceIndex = getAlreadyActivatedAdviceIndex(activeAdviceId);
    if (activeAdviceIndex + 1 < alreadyActivatedAdviceIds.length) {
      setActiveAdviceId(alreadyActivatedAdviceIds[activeAdviceIndex + 1]);
    } else {
      const addAdviceId = getRandomAdviceId(alreadyActivatedAdviceIds, getAdvice(activeAdviceId).tags[0]);
      alreadyActivatedAdviceIds.push(addAdviceId);
      setActiveAdviceId(addAdviceId);
    }
  };
  const prevAdvice = () => {
    const activeAdviceIndex = getAlreadyActivatedAdviceIndex(activeAdviceId);
    if (activeAdviceIndex - 1 >= 0) {
      setActiveAdviceId(activeAdviceIndex - 1);
    }
  };

  const language = useContext(LanguageContext);

  return (
    <div className="advice flex-column">
      <p className="mt-0 mb-5 left size-4">
        {getAdvice(activeAdviceId).text[language]}
      </p>
      <div className="flex">
        {getAlreadyActivatedAdviceIndex(activeAdviceId) !== 0 ? <button className="advice-nav prev-advice" onClick={prevAdvice}>Previous</button> : null}
        <button className="advice-nav next-advice ml-a" onClick={nextAdvice}>Next Advice</button>
      </div>
    </div>
  );
};
