import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProductCharts from '../components/charts/ProductCharts';
import { useProducts } from '../hooks/useProducts';
import { useTranslation } from '../hooks/useTranslation';

export default function ProcessorPage() {
  const { t } = useTranslation();
  const { products, loading, error } = useProducts('processors');

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-600 dark:text-gray-400">{t('common.loading')}</p>
    </div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-red-600">{error}</p>
    </div>;
  }

  return (
    <motion.main 
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Mac 处理器性能排名 | Apple Silicon M1/M2/M3 性能对比</title>
        <meta name="description" content="最新 Mac 处理器性能排名，包括 M1/M2/M3 系列处理器的单核和多核跑分数据对比" />
        <meta name="keywords" content="Mac处理器,M1,M2,M3,性能排名,单核性能,多核性能,Apple Silicon" />
      </Helmet>

      <section className="relative h-[30vh] flex items-center justify-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-2 text-blue-600 dark:text-blue-400">
            {t('titles.processors')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('common.basedOn')}
          </p>
        </div>
      </section>
      
      <div className="max-w-[90rem] mx-auto px-4 py-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center mb-8">
            {t('common.performanceComparison')}
          </h2>
          <ProductCharts products={products} showProcessor={false} />
        </section>
      </div>
    </motion.main>
  );
}