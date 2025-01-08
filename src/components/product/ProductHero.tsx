import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

interface ProductHeroProps {
  titleKey: string;
  titleColor?: string;
}

export default function ProductHero({ 
  titleKey,
  titleColor = "text-blue-600 dark:text-blue-400"
}: ProductHeroProps) {
  const { t } = useTranslation();

  return (
    <motion.section 
      className="relative h-[40vh] flex items-center justify-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1 
          className={`text-5xl font-bold mb-4 ${titleColor}`}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {String(t(titleKey))}
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-400"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {String(t('common.basedOn'))}
        </motion.p>
      </div>
    </motion.section>
  );
}