import { ApplicationSection } from '../components/sections/ApplicationSection';
import { Einsatzbereiche } from '../components/sections/Einsatzbereiche';
import { FAQSection } from '../components/sections/FAQSection';
import { Hero } from '../components/sections/Hero';
import { PartnerSection } from '../components/sections/PartnerSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { Testimonials } from '../components/sections/Testimonials';
import { Vorteile } from '../components/sections/Vorteile';
import { WhyYutu } from '../components/sections/WhyYutu';

export function Home() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <WhyYutu />
      <Einsatzbereiche />
      <Vorteile />
      <Testimonials />
      <ApplicationSection />
      <PartnerSection />
      <FAQSection />
    </>
  );
}
