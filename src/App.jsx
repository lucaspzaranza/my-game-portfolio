import './App.css';
import React, { useState } from 'react';
import { HeaderComponent } from './components/header/header-component';
import { LanguageProvider } from './contexts/LanguageContext';

import "nes.css/css/nes.min.css";
import "rpgui/rpgui.min.css"
import "rpgui/rpgui.min.js"
import MainMenu from './components/main-menu/main-menu';

function App() {
  const [lang, setLang] = useState('pt');
 
  return (
    <LanguageProvider value={[lang, setLang ]}>
      <div className="App">
        <header className="App-header">
          <HeaderComponent/>
        </header>
        <MainMenu/>
      </div>
    </LanguageProvider>
  );
}

export default App;
