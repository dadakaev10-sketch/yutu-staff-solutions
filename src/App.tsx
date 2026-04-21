import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Einsatzbereiche } from './components/Einsatzbereiche';
import { FinalCTA } from './components/FinalCTA';
import { ApplicationForm } from './components/ApplicationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-navy">
      <Hero />
      <Benefits />
      <Einsatzbereiche />
      <FinalCTA />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
