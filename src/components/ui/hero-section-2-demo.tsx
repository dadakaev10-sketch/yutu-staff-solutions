import { HeroSection } from './hero-section-2';

export default function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
          url: '/ytlogo.png',
          alt: 'YuTu Logo',
          text: 'YuTu Staff Solutions',
        }}
        slogan="Regional. Flexibel. Persoenlich."
        title={
          <>
            Finde Jobs,
            <br />
            <span className="text-brand-orange">die zu deinem Alltag passen.</span>
          </>
        }
        subtitle="Schnell bewerben, persoenlich Rueckmeldung bekommen und flexible Einsaetze in deiner Region finden."
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
    </div>
  );
}
