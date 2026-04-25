import { useEffect, useRef } from 'react';
import { ArrowRight, BadgeEuro, Clock3, HeartHandshake, MapPinned } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const benefitRows = [
  {
    title: 'Flexible Arbeitszeiten',
    description: 'Schichten rund um Studium, Familie oder Hauptjob. Du entscheidest mit, wann und wie oft du arbeiten willst.',
    image: '/branchen/benefit-flexibel.png',
    alt: 'Studentin plant flexible Arbeitsschichten am Laptop',
    icon: Clock3,
  },
  {
    title: 'Persönlich & regional',
    description: 'Wir kennen unsere Partnerbetriebe und schauen genau, welcher Einsatz zu dir, deinem Wohnort und deiner Verfügbarkeit passt.',
    image: '/branchen/benefit-persönlich.jpg',
    alt: 'Persönliches Beratungsgespräch zwischen Mitarbeiter und Bewerber',
    icon: MapPinned,
  },
  {
    title: 'Faire Bezahlung',
    description: 'Transparente Stundensätze, klare Kommunikation und pünktliche Auszahlung. So soll Personaldienstleistung sein.',
    image: '/branchen/benefit-fair.jpg',
    alt: 'Mitarbeiter prüft transparente Lohnabrechnung am Schreibtisch',
    icon: BadgeEuro,
  },
  {
    title: 'Schnell vom Kontakt zum Einsatz',
    description: 'Kein unnötiger Papierkram, kein komplizierter Prozess. Wir melden uns schnell und bringen dich zügig in passende Einsätze.',
    image: '/branchen/benefit-schnell.png',
    alt: 'Mitarbeiter beim Telefonat – schnelle Rückmeldung nach der Bewerbung',
    icon: HeartHandshake,
  },
];

export function Vorteile() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: headingRef.current,
          start: 'top 90%',
          onEnter: () => gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
          once: true,
        });
      }

      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        const fromX = i % 2 === 0 ? -40 : 40;
        gsap.set(row, { opacity: 0, x: fromX });
        ScrollTrigger.create({
          trigger: row,
          start: 'top 88%',
          onEnter: () => gsap.to(row, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }),
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="vorteile" className="bg-white dark:bg-[#111] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="max-w-3xl">
          <span className="inline-flex rounded-full bg-orange-50 dark:bg-white/10 px-4 py-1 text-sm font-semibold text-orange">
            Vorteile
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Flexibel arbeiten. Fair bezahlt werden. Menschlich begleitet.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-white/70 font-opensans">
            YuTu verbindet schnelle Prozesse mit persönlicher Betreuung. Genau das macht den Unterschied zwischen
            irgendeinem Job und einem Einsatz, der wirklich passt.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {benefitRows.map(({ title, description, image, alt, icon: Icon }, index) => (
            <div
              key={title}
              ref={(el) => { rowsRef.current[index] = el; }}
              className={`grid gap-8 overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-5 shadow-sm md:p-8 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
              }`}
            >
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] sm:h-80">
                <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,107,0,0.15))]" />
              </div>

              <div className="max-w-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 dark:bg-white/10 text-white shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{title}</h3>
                <p className="mt-4 text-base leading-8 text-gray-600 dark:text-white/70 font-opensans sm:text-lg">{description}</p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 h-auto px-0 text-base font-semibold text-orange hover:bg-transparent hover:text-orange/80"
                >
                  <a href="#bewerbung">
                    Jetzt bewerben
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
