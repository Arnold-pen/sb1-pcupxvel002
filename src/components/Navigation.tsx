import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

function NavLink({ to, children, isActive }: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
}) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive 
          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, isActive, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
        isActive 
          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
      }`}
    >
      {children}
    </Link>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const mainNavItems = [
    { to: "/", label: t('nav.byProcessor') },
    { to: "/macbook-pro", label: t('nav.macbookPro') },
    { to: "/macbook-air", label: t('nav.macbookAir') },
    { to: "/mac-mini", label: t('nav.macMini') },
    { to: "/imac", label: t('nav.iMac') }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex justify-between">
          <div className="hidden md:flex items-center space-x-4">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to}
                isActive={location.pathname === item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-1">
            <Link
              to="/about"
              className={`p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 ${
                location.pathname === '/about' ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              {t('nav.about')}
            </Link>
            <ThemeToggle />
            <LanguageToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 p-2"
              >
                <span className="sr-only">Open menu</span>
                {!isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {[...mainNavItems, { to: "/about", label: t('nav.about') }].map((item) => (
              <MobileNavLink 
                key={item.to} 
                to={item.to}
                isActive={location.pathname === item.to}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}