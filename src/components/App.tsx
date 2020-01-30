import React from 'react';
import './App.scss';
import {Advices} from "./Advices";
import {LanguageContext} from "../contexts/language";
import {Language} from "../models/languages";

export const App: React.FC = () => {
  return (
    <LanguageContext.Provider value={Language.en}>

      <div className="App h-viewport-100">
        <Advices/>
      </div>

    </LanguageContext.Provider>
  );
};
