import {
  UtensilsCrossed,
  Sparkles,
  PartyPopper,
  ShieldCheck,
  Hotel,
  Truck,
  Factory,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';

const bereiche = [
  { icon: UtensilsCrossed, label: 'Gastronomie', desc: 'Service, Bar, Küchenhilfe' },
  { icon: Sparkles, label: 'Reinigung', desc: 'Büro, Objekt, Hotellerie' },
  { icon: PartyPopper, label: 'Event', desc: 'Messen, Konzerte, Gala' },
  { icon: ShieldCheck, label: 'Security', desc: 'Veranstaltung & Objekt' },
  { icon: Hotel, label: 'Hotellerie', desc: 'Rezeption & Housekeeping' },
  { icon: Truck, label: 'Logistik', desc: 'Lager, Kommissionierung' },
  { icon: Factory, label: 'Produktion', desc: 'Helfer & Fachkräfte' },
  { icon: ShoppingBag, label: 'Handel', desc: 'Promotion & Verkauf' },
];

export function Einsatzbereiche() {
  return (
    <section id="branchen" className="bg-brand-navy scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-sm uppercase tracking-widest text-brand-orange">
              Deine Einsatzbereiche
            </p>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Für jeden
              <br />
              den richtigen Job.
            </h2>
          </div>
          <p className="max-w-md text-white/80">
            Wähle deine Wunsch-Branche — wir matchen dich mit passenden Betrieben in deiner Region.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {bereiche.map(({ icon: Icon, label, desc }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex h-full w-full flex-col items-start gap-4 rounded-3xl border border-white/10 bg-brand-navy-light/40 p-5 text-left transition hover:border-brand-orange hover:bg-brand-navy-light/70 sm:p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </span>
                <div className="flex-1">
                  <div className="font-display text-lg uppercase tracking-wide sm:text-xl">{label}</div>
                  <div className="mt-1 text-sm text-white/70">{desc}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/60 transition group-hover:text-brand-orange">
                  Jobs ansehen <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
