import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function AboutPage(): JSX.Element {
  const { t, language } = useTranslation();

  const pageTitle = language === 'en' ? 'About Mac Processor Rankings | Website Introduction' : '关于 Mac 处理器性能排名 | 网站介绍';
  const pageDescription = language === 'en' 
    ? 'Mac Processor Rankings provides comprehensive performance comparisons of Apple Silicon M1/M2/M3/M4 series processors.'
    : 'Mac 处理器性能排名网站提供最新、最全面的 Apple Silicon M1/M2/M3/M4 系列处理器性能数据对比。';

  const getTranslatedItems = (key: string) => {
    const items = t(key, { returnObjects: true });
    return Array.isArray(items) ? items : [];
  };

  return (
    <motion.main 
      className="min-h-screen bg-white dark:bg-gray-900 pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      {/* Rest of your JSX */}
      <div>About Page Content</div>
    </motion.main>
  );
}