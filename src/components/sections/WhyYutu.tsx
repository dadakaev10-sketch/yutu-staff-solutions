import { useEffect, useRef } from 'react';
import { BadgeEuro, Clock3, HeartHandshake, MapPinned, Rocket, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  { icon: Clock3, title: 'Flexible Arbeitszeiten', description: 'Schichten rund um Studium, Familie oder Hauptjob.' },
  { icon: MapPinned, title: 'Persönlich & regional', description: 'Wir vermitteln Jobs in Wien, Linz, Graz und Umgebung mit echtem lokalem Bezug.' },
  { icon: BadgeEuro, title: 'Faire Bezahlung', description: 'Transparente Stundensätze und pünktliche Auszahlung.' },
  { icon: Rocket, title: 'Schnell vom Kontakt zum Einsatz', description: 'Wir melden uns in der Regel innerhalb von 24 Stunden zurück.' },
  { icon: HeartHandshake, title: 'Einfach bewerben', description: 'Kein Anschreiben, kein Lebenslauf-Zwang, keine unnötigen Hürden.' },
  { icon: Users, title: 'Alle willkommen', description: 'Wir matchen nach Motivation, Verfügbarkeit und Einsatzbereich.' },
];

export function WhyYutu() {
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

      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger: cards[0],
          start: 'top 90%',
          onEnter: () => gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }),
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="branchen" className="bg-white dark:bg-[#111] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange">
            <span className="h-px w-10 bg-orange" aria-hidden="true" />
            Warum YuTu?
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Persönlich, regional und schnell zum passenden Job.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-white/70 font-opensans">
            YuTu verbindet Menschen mit flexiblen Einsätzen in ihrer Region. Der Fokus liegt auf ehrlicher Kommunikation,
            kurzen Wegen und Jobs, die wirklich zum Alltag passen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map(({ icon: Icon, title, description }, i) => (
            <article
              key={title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 dark:bg-white/10 text-white transition group-hover:bg-orange">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-base leading-7 text-gray-600 dark:text-white/70 font-opensans">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
