import './App.css';
import React from 'react';
import { LanguageProvider }  from './contexts/LanguageContext.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LangButtonsMenu } from "./components/lang-buttons/lang-buttons.js";

import "nes.css/css/nes.min.css";
import MainMenu from './components/views/main-menu/main-menu.js';
import { MadeBy } from './components/footer-made-by/made-by.js'; 
import { AboutMe } from './components/views/about-me/about-me.js';
import { MyProjects } from './components/views/my-projects/my-projects.js';
import Challenges from './components/views/challenges/challenges.js';
import ContactInfo from './components/views/contact-info/contact-info.js';

function App() {
  return (
    <LanguageProvider>
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
