import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ApplicationSection } from './components/sections/ApplicationSection';
import { Einsatzbereiche } from './components/sections/Einsatzbereiche';
import { FAQSection } from './components/sections/FAQSection';
import { Hero } from './components/sections/Hero';
import { PartnerSection } from './components/sections/PartnerSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { Vorteile } from './components/sections/Vorteile';
import { WhyYutu } from './components/sections/WhyYutu';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <ProcessSection />
        <WhyYutu />
        <Einsatzbereiche />
        <Vorteile />
        <ApplicationSection />
        <PartnerSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
