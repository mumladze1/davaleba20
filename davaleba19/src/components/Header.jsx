
import React from 'react';
import { useLanguage } from '../context';

const Header = () => {
  const { toggleLanguage, translations, language } = useLanguage();

  return (
    <header>
      <h1>{translations[language].header}</h1>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Georgian' : 'Switch to English'}
      </button>
    </header>
  );
};

export default Header;
