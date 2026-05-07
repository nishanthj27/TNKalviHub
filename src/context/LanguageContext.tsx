'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Language, translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguagePreference: (language: Language) => void;
  t: (key: string) => string;
  isTamil: boolean;
  withLanguage: (href: string, languageOverride?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  setLanguagePreference: () => {},
  t: (key: string) => key,
  isTamil: false,
  withLanguage: (href: string) => href,
});

function getLanguageFromPathname(pathname: string | null): Language {
  return pathname?.split('/')[1] === 'ta' ? 'ta' : 'en';
}

function localizePath(pathname: string, language: Language) {
  const parts = pathname.split('/');
  if (parts[1] === 'en' || parts[1] === 'ta') {
    parts[1] = language;
    return parts.join('/') || `/${language}`;
  }
  return `/${language}${pathname === '/' ? '' : pathname}`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const pathLanguage = getLanguageFromPathname(pathname);
  const [language, setLanguage] = useState<Language>(pathLanguage);

  useEffect(() => {
    setLanguage(pathLanguage);
    document.documentElement.lang = pathLanguage;
    document.cookie = `tnk-lang=${pathLanguage}; path=/; max-age=31536000; SameSite=Lax`;
    localStorage.setItem('tnk-lang', pathLanguage);
  }, [pathLanguage]);

  const setLanguagePreference = (next: Language) => {
    setLanguage(next);
    document.cookie = `tnk-lang=${next}; path=/; max-age=31536000; SameSite=Lax`;
    localStorage.setItem('tnk-lang', next);
  };

  const toggleLanguage = () => {
    const next: Language = language === 'en' ? 'ta' : 'en';
    setLanguagePreference(next);
    const queryString = typeof window === 'undefined' ? '' : window.location.search;
    router.push(`${localizePath(pathname || '/', next)}${queryString}`);
  };

  const withLanguage = (href: string, languageOverride: Language = language) => {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
    return localizePath(href.startsWith('/') ? href : `/${href}`, languageOverride);
  };

  const t = (key: string): string => {
    return translations[language][key] ?? translations['en'][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguagePreference, t, isTamil: language === 'ta', withLanguage }}>
      <div className={language === 'ta' ? 'lang-ta' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
