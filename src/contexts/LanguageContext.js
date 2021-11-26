import React, { createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = LanguageContext.Provider;
export const LanguageConsumer = LanguageContext.Consumer;
 
export default LanguageContext;