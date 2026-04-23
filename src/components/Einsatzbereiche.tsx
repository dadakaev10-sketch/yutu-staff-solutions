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
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy-light/45 p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-orange/20 blur-3xl" />
            <div className="relative">
              <p className="eyebrow">Deine Einsatzbereiche</p>
              <h2 className="section-title mt-4 max-w-md">
                Jobs, die zu deinem Alltag passen.
              </h2>
              <p className="section-copy mt-5 max-w-lg">
                Ob Studium, Familie oder Hauptjob: Wir vermitteln Einsätze, die regional erreichbar sind und sich flexibel einplanen lassen.
              </p>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[1.75rem]">
              <img
                src="/images/hero.png"
                alt="YuTu Team im Einsatz"
                className="h-[320px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-brand-navy-dark/75 px-4 py-4 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
                  Im Einsatz
                </div>
                <div className="mt-2 text-lg font-bold text-white">
                  Wir matchen nicht einfach Stellen, sondern Einsatzzeiten, Wege und Teamfit.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {bereiche.map(({ icon: Icon, label, desc }, index) => (
              <button
                key={label}
                type="button"
                onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}
                className={`group flex h-full w-full flex-col items-start gap-4 rounded-[1.75rem] border p-5 text-left transition sm:p-6 ${
                  index === 0
                    ? 'border-brand-orange/45 bg-brand-orange/10 sm:col-span-2'
                    : 'border-white/10 bg-brand-navy-light/35 hover:border-brand-orange/50 hover:bg-brand-navy-light/60'
                }`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                  index === 0
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-orange/15 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'
                }`}>
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </span>
                <div className="flex-1">
                  <div className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">{label}</div>
                  <div className="mt-1 text-sm leading-6 text-white/72 sm:text-base">{desc}</div>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/68 transition group-hover:text-brand-orange">
                  Jobs ansehen <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
