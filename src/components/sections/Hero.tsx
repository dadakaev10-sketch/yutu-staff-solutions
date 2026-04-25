import { useEffect, useRef } from 'react';
import { ArrowRight, Clock3, Scale, ShieldCheck, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { Button } from '../ui/Button';

const trustItems = [
  { icon: Users, num: 500, suffix: '+', label: 'Menschen im Einsatz' },
  { icon: ShieldCheck, num: 50, suffix: '+', label: 'Partner-Betriebe' },
  { icon: Clock3, num: 24, suffix: 'h', label: 'Antwortzeit' },
  { icon: Scale, num: 100, suffix: '%', label: 'Arbeitsrechtliche Sicherheit' },
];

export function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<(HTMLDivElement | null)[]>([]);
  const counterEls = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(badgeRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(headingRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
        .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo(
          trustRef.current.filter(Boolean),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
          '-=0.2'
        )
        .fromTo(cardRef.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, '-=0.6');

      // Animated counters
      trustItems.forEach(({ num, suffix }, i) => {
        const el = counterEls.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: num,
          duration: 2,
          delay: 0.8 + i * 0.1,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 text-white" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage:
            "image-set(url('/images/desktophero.webp') type('image/webp'), url('/images/desktophero.png') type('image/png'))",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.78)_0%,rgba(15,23,42,0.55)_55%,rgba(15,23,42,0.35)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.6))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-center px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div ref={badgeRef} className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Persönlich, regional, menschlich
            </div>

            <h1
              ref={headingRef}
              id="hero-heading"
              className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Dein Nebenjob.
              <br />
              Regional. Flexibel.
            </h1>

            <p ref={subRef} className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Schnell bewerben • Persönliche Rückmeldung • Jobs direkt in deiner Region
            </p>

            <div ref={buttonsRef} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <a href="#bewerbung">
                  Jetzt bewerben - in 2 Minuten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15"
              >
                <a href="#partner">Für Partnerbetriebe</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustItems.map(({ icon: Icon, suffix, label }, i) => (
                <div
                  key={label}
                  ref={(el) => { trustRef.current[i] = el; }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10B981]/20 text-[#10B981]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      ref={(el) => { counterEls.current[i] = el; }}
                      className="text-2xl font-bold leading-none text-white"
                    >
                      0{suffix}
                    </span>
                    <div className="text-sm leading-tight text-white/75">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={cardRef} className="hidden lg:block">
            <div className="ml-auto max-w-md rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#10B981]">
                Schnell zum Einsatz
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white">
                Flexible Jobs in Wien, Linz, Graz und Umgebung
              </h2>
              <p className="mt-3 text-white/75">
                Ob Studium, Familie oder Hauptjob: Wir finden Einsätze, die zu deinem Alltag passen.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/85">
                <li className="rounded-xl bg-white/10 px-4 py-3">Ohne Lebenslauf-Zwang</li>
                <li className="rounded-xl bg-white/10 px-4 py-3">Persönlicher Kontakt statt Massenabfertigung</li>
                <li className="rounded-xl bg-white/10 px-4 py-3">Faire Bezahlung und schnelle Rückmeldung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
