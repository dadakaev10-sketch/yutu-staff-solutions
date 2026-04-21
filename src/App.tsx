import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Einsatzbereiche } from './components/Einsatzbereiche';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { ApplicationForm } from './components/ApplicationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-navy">
      <Header />
      <Hero />
      <Stats />
      <Einsatzbereiche />
      <Benefits />
      <Testimonials />
      <FinalCTA />
      <ApplicationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
