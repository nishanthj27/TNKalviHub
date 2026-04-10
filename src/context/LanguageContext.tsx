'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isTamil: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
  isTamil: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('tnk-lang') as Language | null;
    if (saved === 'en' || saved === 'ta') {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const next: Language = language === 'en' ? 'ta' : 'en';
    setLanguage(next);
    localStorage.setItem('tnk-lang', next);
  };

  const t = (key: string): string => {
    return translations[language][key] ?? translations['en'][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isTamil: language === 'ta' }}>
      <div className={language === 'ta' ? 'lang-ta' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
