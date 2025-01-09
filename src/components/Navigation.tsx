import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';

function NavLink({ to, children, isActive, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full ${
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

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed left-0 top-0 h-full w-48 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm z-50">
        <div className="h-full flex flex-col">
          <div className="px-3 py-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent px-3">
              Apple PK
            </h1>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-4">
            <div className="flex flex-col space-y-1.5">
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
          </div>

          <div className="px-3 py-4 flex justify-center space-x-1">
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
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 z-50">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Apple PK
          </h1>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-white dark:bg-gray-900 pt-16 z-40"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="p-4">
                <div className="flex flex-col space-y-2">
                  {mainNavItems.map((item) => (
                    <NavLink 
                      key={item.to} 
                      to={item.to}
                      isActive={location.pathname === item.to}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/about"
                    isActive={location.pathname === '/about'}
                    onClick={closeMenu}
                  >
                    {t('nav.about')}
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}