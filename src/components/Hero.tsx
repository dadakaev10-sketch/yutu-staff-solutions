import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const bullets = ['Schnell & flexibel', 'Ohne Lebenslauf', 'Regionale Jobs'];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-brand-orange/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-6 sm:px-8 sm:pb-20 sm:pt-10 lg:grid-cols-2 lg:gap-16 lg:pt-12">
        <div className="flex flex-col justify-center">
          <p className="font-display text-sm uppercase tracking-widest text-brand-orange">
            Dein Nebenjob · regional · flexibel
          </p>
          <h1 className="heading-display mt-4 text-5xl sm:text-6xl lg:text-7xl">
            Nebenjob
            <br />
            gesucht?
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
            Schnell & flexibel. Ohne Lebenslauf. Regionale Jobs — direkt bei dir um die Ecke.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 shrink-0">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
                <span className="font-display text-xl uppercase tracking-wide sm:text-2xl">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              variant="orange"
              onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Jetzt bewerben
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative order-first flex items-center justify-center lg:order-last">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-brand-navy-light shadow-2xl shadow-black/30">
            <img
              src="/images/hero.svg"
              alt="YuTu Servicekraft"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-brand-navy-dark/80 px-4 py-3 backdrop-blur">
              <div className="font-display text-xs uppercase tracking-widest text-brand-orange">
                Jetzt im Einsatz
              </div>
              <div className="font-display text-base uppercase tracking-wide text-white">
                500+ Mitarbeiter · 50+ Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
