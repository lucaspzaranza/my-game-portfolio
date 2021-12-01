import './App.css';
import React, { useState } from 'react';
import { HeaderComponent } from './components/header/header-component';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [lang, setLang] = useState('pt');
 
  return (
    <LanguageProvider value={[lang, setLang ]}>
      <div className="App">
        <header className="App-header">
          <HeaderComponent/>
        </header>
      </div>
    </LanguageProvider>
  );
}

export default App;
