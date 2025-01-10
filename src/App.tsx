import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import MacMiniPage from './pages/MacMiniPage';
import IMacPage from './pages/IMacPage';
import ProcessorPage from './pages/ProcessorPage';
import MacBookProPage from './pages/MacBookProPage';
import MacBookAirPage from './pages/MacBookAirPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProcessorPage />} />
        <Route path="/macbook-pro" element={<MacBookProPage />} />
        <Route path="/macbook-air" element={<MacBookAirPage />} />
        <Route path="/mac-mini" element={<MacMiniPage />} />
        <Route path="/imac" element={<IMacPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}