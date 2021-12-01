import './App.css';
import React, { useState } from 'react';
import { HeaderComponent } from './components/header/header-component';
import { LanguageProvider } from './contexts/LanguageContext';

import "nes.css/css/nes.min.css";
import MainMenu from './components/main-menu/main-menu';
import { MadeBy } from './components/made-by/made-by';
import { AboutMe } from './components/about-me/about-me';

function App() {
  const [lang, setLang] = useState('pt');
 
  return (
    <LanguageProvider value={[lang, setLang ]}>
      <div className="App">
        <header className="App-header">
          <HeaderComponent/>
        </header>
        <AboutMe/>
        {/* <MainMenu/> */}
        <MadeBy/>
      </div>
    </LanguageProvider>
  );
}

export default App;
