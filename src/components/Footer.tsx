import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t, language } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {language === 'en' ? 'Mac Processor Rankings' : 'Mac 处理器性能排名'}
            </h3>
            <p className="text-sm">
              {language === 'en' 
                ? 'Providing comprehensive performance comparisons of Apple Silicon M1/M2/M3/M4 series processors.'
                : '提供最新、最全面的 Apple Silicon M1/M2/M3/M4 系列处理器性能数据对比。'
              }
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {language === 'en' ? 'Quick Links' : '快速导航'}
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{String(t('nav.byProcessor'))}</Link></li>
              <li><Link to="/macbook-pro" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{String(t('nav.macbookPro'))}</Link></li>
              <li><Link to="/macbook-air" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{String(t('nav.macbookAir'))}</Link></li>
              <li><Link to="/mac-mini" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{String(t('nav.macMini'))}</Link></li>
              <li><Link to="/imac" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{String(t('nav.iMac'))}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {language === 'en' ? 'About Us' : '关于我们'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {String(t('nav.about'))}
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:Domen.Reed@gmail.com" 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {language === 'en' ? 'Contact Us' : '联系我们'}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              © {currentYear} {language === 'en' ? 'Mac Processor Performance Rankings' : 'Mac 处理器性能排名'}
            </p>
            <p className="mt-2 md:mt-0">
              {language === 'en' ? 'Based on ' : '基于 '}
              <a 
                href="https://www.geekbench.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Geekbench
              </a>
              {language === 'en' ? ' benchmark data' : ' 跑分数据'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}