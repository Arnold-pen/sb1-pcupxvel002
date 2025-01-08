import { Helmet } from 'react-helmet-async';
import ProductHero from '../components/product/ProductHero';
import ProductCharts from '../components/charts/ProductCharts';
import { useProducts } from '../hooks/useProducts';
import { useTranslation } from '../hooks/useTranslation';

export default function IMacPage() {
  const { t } = useTranslation();
  const { products, loading, error } = useProducts('imac');

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
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Helmet>
        <title>iMac & Mac Pro 性能排名 | M1/M2/M3 性能对比</title>
        <meta name="description" content="最新 iMac 与 Mac Pro 性能排名，包括搭载 M1/M2/M3 系列芯片的产品单核和多核跑分数据对比" />
        <meta name="keywords" content="iMac,Mac Pro,性能排名,M1,M2,M3,性能对比,单核性能,多核性能" />
        <link rel="canonical" href="https://mac-processor-ranking.com/imac" />
        <meta property="og:title" content="iMac & Mac Pro 性能排名 | M1/M2/M3 性能对比" />
        <meta property="og:description" content="最新 iMac 与 Mac Pro 性能排名，包括搭载 M1/M2/M3 系列芯片的产品单核和多核跑分数据对比" />
        <meta property="og:url" content="https://mac-processor-ranking.com/imac" />
      </Helmet>

      <ProductHero titleKey="titles.iMac" />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-12">
            {t('common.performanceComparison')}
          </h2>
          <ProductCharts products={products} showProcessor={true} />
        </section>
      </div>
    </main>
  );
}