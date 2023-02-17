import React, {useState, createContext } from 'react';

export const LanguageContext = createContext('pt');

export function LanguageProvider (props) {
    const [lang, setLang] = useState('pt');

    function setNewLanguage(newLang){
        setLang(newLang);
    }

    return (
        <LanguageContext.Provider value={{lang, setNewLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}