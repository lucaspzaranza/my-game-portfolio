import './App.css';
import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LangButtonsMenu } from "./components/lang-buttons/lang-buttons.jsx";

import "nes.css/css/nes.min.css";
import MainMenu from './components/views/main-menu/main-menu.jsx';
import { MadeBy } from './components/footer-made-by/made-by'; 
import { AboutMe } from './components/views/about-me/about-me';
import { MyProjects } from './components/views/my-projects/my-projects';
import Challenges from './components/views/challenges/challenges';
import ContactInfo from './components/views/contact-info/contact-info';

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
                <Route exact path="/projects">
                  <MyProjects/>
                </Route>
                <Route exact path="/challenges">
                  <Challenges/>
                </Route>
                <Route exact path="/contact-info">
                  <ContactInfo/>
                </Route>
              </Switch>
            <MadeBy/>
          </div>
        </Router>
    </LanguageProvider>
  );
}

export default App;
