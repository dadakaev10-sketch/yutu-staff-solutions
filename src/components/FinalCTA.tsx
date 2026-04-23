import { ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section className="bg-brand-navy-dark">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(26,50,120,0.88),rgba(15,31,79,0.98))] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
          <div>
            <p className="eyebrow">Nächster Schritt</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Kein langes Warten, kein komplizierter Prozess.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-7 text-white/76">
              Du gibst uns deine Daten, wir melden uns persönlich und finden einen Einsatz, der zeitlich wirklich zu dir passt.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {['Formular in 2 Minuten', 'Persönliche Rückmeldung', 'Flexible Einsätze in deiner Region'].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/84 sm:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6">
          <Button
            fullWidth
            className="max-w-md"
            onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt bewerben
          </Button>

          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange shadow-xl shadow-black/20">
            <ArrowDown className="h-6 w-6 text-white" strokeWidth={3} />
          </span>
        </div>
      </div>
    </section>
  );
}
