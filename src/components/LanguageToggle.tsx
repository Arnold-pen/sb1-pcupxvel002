import { motion } from 'framer-motion';
import { useLanguageContext } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
    >
      <span className="text-sm font-medium">
        {language === 'en' ? '中文' : 'EN'}
      </span>
    </motion.button>
  );
}