import { Clock, Sparkles, BadgeDollarSign, Rocket, Handshake, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const items = [
  { icon: Clock, label: 'Flexible Arbeitszeiten', desc: 'Schichten rund um Studium, Familie oder Hauptjob.' },
  { icon: Sparkles, label: 'Abwechslungsreich', desc: 'Gastro, Event, Reinigung, Security — neue Orte, neue Leute.' },
  { icon: BadgeDollarSign, label: 'Faire Bezahlung', desc: 'Transparente Stundensätze & pünktliche Auszahlung.' },
  { icon: Rocket, label: 'Einfach bewerben', desc: 'Kein Anschreiben, kein Lebenslauf-Zwang, keine Hürden.' },
  { icon: Handshake, label: 'M / W / D — alle willkommen', desc: 'Wir matchen nach Skills und Motivation, nicht nach Schubladen.' },
];

export function Benefits() {
  return (
    <section id="vorteile" className="bg-brand-navy-dark scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="font-display text-sm uppercase tracking-widest text-brand-orange">
            Deine Vorteile
          </p>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Flexibler Nebenjob —
            <br />
            fair bezahlt.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label, desc }) => (
            <li
              key={label}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-brand-navy-light/40 p-6 transition hover:border-brand-orange/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange text-white">
                <Icon className="h-6 w-6" strokeWidth={2.25} />
              </span>
              <div>
                <div className="font-display text-lg uppercase tracking-wide sm:text-xl">{label}</div>
                <p className="mt-2 text-white/75">{desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button
            variant="orange"
            onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt bewerben
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
