import { useLanguageContext } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

type TranslationKey = keyof typeof translations.en;
type NestedTranslation = typeof translations.en;

export function useTranslation() {
  const { language } = useLanguageContext();
  
  const t = (key: string, options?: { returnObjects?: boolean }): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) return key;
    }
    
    if (options?.returnObjects) {
      return value;
    }
    
    return String(value);
  };

  return { t, language };
}