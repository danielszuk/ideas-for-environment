import React, {useState} from 'react';
import './App.scss';
import {Advices} from "./Advices";
import {LanguageContext} from "../contexts/language";
import {Languages} from "../models/languages";

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => setLoading(false);

  return (
    <LanguageContext.Provider value={Languages.en}>

      <div className={`App h-viewport-100 ${loading ? "loading" : ""}`}>
        <Advices onBackgroundLoad={onLoad}/>
      </div>

    </LanguageContext.Provider>
  );
};
