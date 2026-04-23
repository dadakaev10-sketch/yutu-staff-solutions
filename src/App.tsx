import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ApplicationSection } from './components/sections/ApplicationSection';
import { Einsatzbereiche } from './components/sections/Einsatzbereiche';
import { FAQSection } from './components/sections/FAQSection';
import { Hero } from './components/sections/Hero';
import { PartnerSection } from './components/sections/PartnerSection';
import { Testimonials } from './components/sections/Testimonials';
import { Vorteile } from './components/sections/Vorteile';
import { WhyYutu } from './components/sections/WhyYutu';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <WhyYutu />
        <Einsatzbereiche />
        <Vorteile />
        <Testimonials />
        <ApplicationSection />
        <PartnerSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
