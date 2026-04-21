import { Clock, Sparkles, BadgeDollarSign, Rocket, Handshake, ArrowRight, Briefcase } from 'lucide-react';
import { Button } from './ui/Button';

const items = [
  { icon: Clock, label: 'Flexible Arbeitszeiten' },
  { icon: Sparkles, label: 'Abwechslungsreiche Tätigkeiten' },
  { icon: BadgeDollarSign, label: 'Faire & attraktive Bezahlung' },
  { icon: Rocket, label: 'Kein komplizierter Bewerbungsprozess' },
  { icon: Handshake, label: 'M/W/D — alle willkommen' },
];

export function Benefits() {
  return (
    <section className="bg-brand-navy-dark">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <h2 className="heading-display text-center text-3xl sm:text-4xl lg:text-5xl">
          Du suchst einen flexiblen Nebenjob mit attraktiver Bezahlung?
          <Briefcase className="ml-2 inline-block h-8 w-8 text-brand-orange sm:h-10 sm:w-10" />
        </h2>

        <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 sm:mt-14">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-4 sm:gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2.25} />
              </span>
              <span className="font-display text-lg uppercase leading-tight sm:text-xl lg:text-2xl">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}>
            Jetzt bewerben
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
