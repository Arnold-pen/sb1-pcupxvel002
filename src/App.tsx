import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProcessorPage from './pages/ProcessorPage';
import MacBookProPage from './pages/MacBookProPage';
import MacBookAirPage from './pages/MacBookAirPage';
import MacMiniPage from './pages/MacMiniPage';
import IMacPage from './pages/IMacPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex">
      <Navigation />
      
      <div className="flex-1 md:ml-48">
        <div className="flex-grow pt-16 md:pt-0">
          <Routes>
            <Route path="/" element={<ProcessorPage />} />
            <Route path="/macbook-pro" element={<MacBookProPage />} />
            <Route path="/macbook-air" element={<MacBookAirPage />} />
            <Route path="/mac-mini" element={<MacMiniPage />} />
            <Route path="/imac" element={<IMacPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}