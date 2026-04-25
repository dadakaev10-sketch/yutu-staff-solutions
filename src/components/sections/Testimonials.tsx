import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Lara M.',
    role: 'Servicekraft, Wien',
    initials: 'LM',
    accent: 'bg-orange/20 text-orange',
    quote:
      'Super schnelle Rückmeldung – innerhalb eines Tages hatte ich meinen ersten Einsatz. Flexible Schichten neben dem Studium sind Gold wert.',
  },
  {
    name: 'Daniel K.',
    role: 'Eventhelfer, Linz',
    initials: 'DK',
    accent: 'bg-white/15 text-white',
    quote:
      'Ohne langen Lebenslauf gleich losgelegt. Faire Bezahlung und die Koordination läuft super persönlich ab.',
  },
  {
    name: 'Yasmin S.',
    role: 'Reinigungskraft, Graz',
    initials: 'YS',
    accent: 'bg-orange/15 text-orange',
    quote:
      'Ich kann meine Stunden rund um Familie und Kinder selbst wählen. Team ist top – fühle mich wirklich geschätzt.',
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: headingRef.current,
          start: 'top 88%',
          onEnter: () =>
            gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
          once: true,
        });
      }

      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger: cards[0],
          start: 'top 90%',
          onEnter: () =>
            gsap.to(cards, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' }),
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="stimmen" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange">
            <span className="h-px w-10 bg-orange" aria-hidden="true" />
            Stimmen aus dem Team
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Echte Menschen. Echte Jobs. Echte Erfahrungen.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Das sagen Menschen, die bereits mit YuTu gearbeitet haben – persönlich betreut,
            regional vermittelt und flexibel im Einsatz.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <article
              key={testimonial.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold ${testimonial.accent}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>

              <div
                className="mt-6 flex items-center gap-1 text-brand-orange"
                aria-label={`Bewertung: 5 von 5 Sternen`}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>

              <Quote className="mt-6 h-8 w-8 text-orange/70" aria-hidden="true" />

              <p className="mt-4 flex-1 text-base leading-8 text-white/80">{testimonial.quote}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-white/40">
          Stimmen werden mit Einverständnis der Mitarbeiter:innen veröffentlicht. Sobald die ersten
          freigegebenen Bewertungen vorliegen, ersetzen wir die hier abgebildeten Beispiele.
        </p>
      </div>
    </section>
  );
}
