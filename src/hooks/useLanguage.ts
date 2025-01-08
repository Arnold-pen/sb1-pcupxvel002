import { useState, useEffect } from 'react';

type Language = 'en' | 'zh';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'zh' : 'en');

  return { language, toggleLanguage };
}