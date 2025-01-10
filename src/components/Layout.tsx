import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex">
      <Navigation />
      <div className="flex-1 md:ml-48">
        <div className="flex-grow pt-16 md:pt-0">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
