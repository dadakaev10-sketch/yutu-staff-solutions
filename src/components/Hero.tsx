import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './Logo';

const bullets = ['Schnell & flexibel', 'Ohne Lebenslauf', 'Regionale Jobs'];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 sm:pt-10">
        <Logo />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pt-16">
        <div className="flex flex-col justify-center">
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl">
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
            <Button onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}>
              Jetzt bewerben
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative order-first flex items-center justify-center lg:order-last">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-brand-navy-light shadow-2xl shadow-black/30">
            <img
              src="/images/hero.jpg"
              alt="YuTu Servicekraft"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
