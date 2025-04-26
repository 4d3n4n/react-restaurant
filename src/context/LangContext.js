import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const getDefaultLang = () => {
    const browserLang = navigator.language.slice(0, 2).toUpperCase();
    if (['FR', 'EN', 'JA'].includes(browserLang)) {
      return browserLang;
    }
    return 'FR';
  };

  const [lang, setLang] = useState(getDefaultLang());

  // Fonction pour changer la langue
  const toggleLang = (newLang) => {
    if (['FR', 'EN', 'JA'].includes(newLang)) {
      setLang(newLang);
    }
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
