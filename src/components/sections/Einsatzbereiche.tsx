import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Factory,
  Hotel,
  PartyPopper,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const branches = [
  { title: 'Gastronomie', description: 'Service, Bar, Küchenhilfe', image: '/branchen/Gastronomie.jpg', alt: 'Servicekraft schenkt Wein in einem Restaurant ein', icon: UtensilsCrossed },
  { title: 'Reinigung', description: 'Büro, Objekt, Hotellerie', image: '/branchen/Reinigung.jpg', alt: 'Reinigungskraft mit Putzwagen in einem Büro', icon: Sparkles },
  { title: 'Event', description: 'Messen, Konzerte, Gala', image: '/branchen/Event.jpg', alt: 'Event-Crew bei einem Konzert hinter den Kulissen', icon: PartyPopper },
  { title: 'Security', description: 'Veranstaltung & Objekt', image: '/branchen/Security.jpg', alt: 'Security-Mitarbeiter im Anzug beim Einlass einer Veranstaltung', icon: ShieldCheck },
  { title: 'Hotellerie', description: 'Rezeption & Housekeeping', image: '/branchen/Rezeption.jpg', alt: 'Rezeptionist begrüßt Gäste an der Hotel-Rezeption', icon: Hotel },
  { title: 'Logistik', description: 'Lager, Kommissionierung', image: '/branchen/Logistik.jpg', alt: 'Lagerarbeiter beim Kommissionieren von Paketen im Hochregallager', icon: Truck },
  { title: 'Produktion', description: 'Helfer & Fachkräfte', image: '/branchen/Produktion.jpg', alt: 'Produktionsmitarbeiter an einer Fertigungsstraße in einer Halle', icon: Factory },
  { title: 'Handel', description: 'Promotion & Verkauf', image: '/branchen/HandelPromotion.jpg', alt: 'Promoter berät Kunden im Einzelhandel', icon: ShoppingBag },
];

export function Einsatzbereiche() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

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

      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger: cards[0],
          start: 'top 90%',
          onEnter: () => gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }),
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="einsatzbereiche" className="bg-gray-50 dark:bg-[#0d0d0d] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-emerald-50 dark:bg-white/10 px-4 py-1 text-sm font-semibold text-[#10B981]">
              Einsatzbereiche
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Viele Branchen. Ein persönlicher Ansprechpartner.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-white/70 font-opensans lg:ml-auto">
            Ob Gastro, Event, Reinigung oder Logistik: Wir finden Einsätze, die zu deinen Zeiten, deinem Wohnort und
            deinem Tempo passen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {branches.map(({ title, description, image, alt, icon: Icon }, i) => (
            <article
              key={title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group overflow-hidden rounded-[1.75rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <picture className="block h-full w-full">
                  <source srcSet={image.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
                  <img
                    src={image}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.58))]" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-gray-900 shadow-md backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/60 font-opensans">{description}</p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 h-auto px-0 text-sm font-semibold text-orange hover:bg-transparent hover:text-orange/80"
                >
                  <a href="#bewerbung">
                    Jobs ansehen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
