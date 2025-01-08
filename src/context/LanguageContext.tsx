import { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from '../hooks/useLanguage';

type LanguageContextType = {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const languageUtils = useLanguage();

  return (
    <LanguageContext.Provider value={languageUtils}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}