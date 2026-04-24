import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Formular ausfüllen',
    description: 'In 2 Minuten beworben — ohne Lebenslauf-Zwang. Nur Name, Kontakt und Wunschbranche.',
    detail: 'Kein Anschreiben, keine komplizierte Registrierung.',
  },
  {
    number: '02',
    title: 'Persönliches Gespräch',
    description: 'Wir melden uns innerhalb von 24 Stunden per Telefon oder E-Mail — persönlich, nicht automatisiert.',
    detail: 'Wir schauen gemeinsam, welche Einsätze zu dir passen.',
  },
  {
    number: '03',
    title: 'Erster Einsatz',
    description: 'Oft schon in der ersten Woche. Du wählst wann und wie oft — wir kümmern uns um den Rest.',
    detail: 'Faire Bezahlung, pünktliche Abrechnung.',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: headingRef.current,
          start: 'top 88%',
          onEnter: () => gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
          once: true,
        });
      }

      const steps = stepsRef.current.filter(Boolean) as HTMLDivElement[];
      if (steps.length) {
        gsap.set(steps, { opacity: 0, y: 50 });
        ScrollTrigger.create({
          trigger: steps[0],
          start: 'top 88%',
          onEnter: () =>
            gsap.to(steps, { opacity: 1, y: 0, duration: 0.7, stagger: 0.18, ease: 'power3.out' }),
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ablauf" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="max-w-2xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-brand-navy">
            So läuft's ab
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Vom Formular zum ersten Einsatz — in wenigen Tagen.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Kein langer Bewerbungsprozess. Kein Warten. Nur drei einfache Schritte.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map(({ number, title, description, detail }, i) => (
            <div
              key={number}
              ref={(el) => { stepsRef.current[i] = el; }}
              className="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              {/* Connector line between cards on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy text-white shadow-md">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between">
                <span className="text-5xl font-black text-slate-100">{number}</span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
              <p className="mt-3 text-sm font-medium text-brand-navy">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#bewerbung">Jetzt starten</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
