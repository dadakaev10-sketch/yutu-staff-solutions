import { HeroSection } from './ui/hero-section-2';

export function Hero() {
  return (
    <HeroSection
      id="top"
      slogan="Dein Nebenjob. Regional. Flexibel."
      title={
        <>
          Nebenjob
          <br />
          <span className="text-brand-orange">gesucht?</span>
        </>
      }
      subtitle="Schnell bewerben, persönlich Rückmeldung bekommen und flexible Jobs direkt in deiner Region finden."
      callToAction={{
        text: 'Jetzt bewerben',
        href: '#bewerbung',
      }}
      backgroundImage="/images/hero.png"
      contactInfo={{
        website: 'yutustaff.netlify.app',
        phone: '+43 664 1485854',
        address: 'Wien und Umgebung',
      }}
    />
  );
}
