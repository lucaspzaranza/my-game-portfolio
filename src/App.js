import './App.css';
import { HeaderComponent } from './components/header/header-component';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const lang = 'pt-br';
  //const lang = 'eng-us';
  return (
    <LanguageProvider value={{lang}}>
      <div className="App">
        <header className="App-header">
          {/* Implementar uma navbar pra navegação */}
          <HeaderComponent/>
        </header>
      </div>
    </LanguageProvider>
  );
}

export default App;
