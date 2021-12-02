import './App.css';
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LangButtonsMenu } from "./components/lang-buttons/lang-buttons.jsx";

import "nes.css/css/nes.min.css";
import MainMenu from './components/main-menu/main-menu';
import { MadeBy } from './components/made-by/made-by';
import { AboutMe } from './components/about-me/about-me';

function App() {
  const [lang, setLang] = useState('pt');
 
  return (
    <LanguageProvider value={[lang, setLang ]}>
        <Router>
          <div className="App">
            <LangButtonsMenu/>
              <Switch>
                <Route exact path="/">
                  <MainMenu/>
                </Route>
                <Route exact path="/about">
                  <AboutMe/>
                </Route>
              </Switch>
            <MadeBy/>
          </div>
        </Router>
    </LanguageProvider>
  );
}

export default App;
