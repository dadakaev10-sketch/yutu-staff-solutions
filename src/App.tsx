import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Footer } from './components/layout/Footer';
import { MobileStickyCTA } from './components/layout/MobileStickyCTA';
import { Navbar } from './components/layout/Navbar';
import { Danke } from './pages/Danke';
import { Datenschutz } from './pages/Datenschutz';
import { Home } from './pages/Home';
import { Impressum } from './pages/Impressum';

gsap.registerPlugin(ScrollTrigger);

function ScrollToHashOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait one frame so the destination has mounted before scrolling.
      requestAnimationFrame(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-[#1a1a1a] dark:text-white">
      <ScrollToHashOnRouteChange />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/danke" element={<Danke />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
