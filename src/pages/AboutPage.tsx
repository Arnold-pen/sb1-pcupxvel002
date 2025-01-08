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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {String(t('about.title'))}
        </motion.h1>

        <div className="prose dark:prose-invert max-w-none space-y-12">
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {String(t('about.intro.title'))}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {String(t('about.intro.content'))}
            </p>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {String(t('about.features.title'))}
            </h2>
            <ul className="list-none space-y-6 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{String(t('about.features.processorRankings.title'))}</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {getTranslatedItems('about.features.processorRankings.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{String(t('about.features.productComparison.title'))}</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {getTranslatedItems('about.features.productComparison.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {String(t('about.data.title'))}
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">{String(t('about.data.intro'))}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">{String(t('about.data.testMethod.title'))}</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {getTranslatedItems('about.data.testMethod.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">{String(t('about.data.testCoverage.title'))}</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {getTranslatedItems('about.data.testCoverage.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {String(t('about.updates.title'))}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {String(t('about.updates.dataUpdates.title'))}
                </h3>
                <ul className="space-y-2">
                  {getTranslatedItems('about.updates.dataUpdates.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {String(t('about.updates.siteOptimization.title'))}
                </h3>
                <ul className="space-y-2">
                  {getTranslatedItems('about.updates.siteOptimization.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {String(t('about.contact.title'))}
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">{String(t('about.contact.content'))}</p>
              <div className="flex items-center space-x-2 text-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-600 dark:text-blue-400">Domen.Reed@gmail.com</span>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}
