import {
  ArrowRight,
  Factory,
  Hotel,
  PartyPopper,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import { Button } from '../ui/Button';

const branches = [
  { title: 'Gastronomie', description: 'Service, Bar, Kuechenhilfe', image: '/images/branche-gastro.jpg', icon: UtensilsCrossed },
  { title: 'Reinigung', description: 'Buero, Objekt, Hotellerie', image: '/images/branche-reinigung.jpg', icon: Sparkles },
  { title: 'Event', description: 'Messen, Konzerte, Gala', image: '/images/branche-event.jpg', icon: PartyPopper },
  { title: 'Security', description: 'Veranstaltung & Objekt', image: '/images/branche-security.jpg', icon: ShieldCheck },
  { title: 'Hotellerie', description: 'Rezeption & Housekeeping', image: '/images/branche-hotel.jpg', icon: Hotel },
  { title: 'Logistik', description: 'Lager, Kommissionierung', image: '/images/branche-logistik.jpg', icon: Truck },
  { title: 'Produktion', description: 'Helfer & Fachkraefte', image: '/images/branche-produktion.jpg', icon: Factory },
  { title: 'Handel', description: 'Promotion & Verkauf', image: '/images/branche-handel.jpg', icon: ShoppingBag },
];

export function Einsatzbereiche() {
  return (
    <section id="einsatzbereiche" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-brand-green">
              Einsatzbereiche
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Viele Branchen. Ein persoenlicher Ansprechpartner.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            Ob Gastro, Event, Reinigung oder Logistik: Wir finden Einsaetze, die zu deinen Zeiten, deinem Wohnort und
            deinem Tempo passen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {branches.map(({ title, description, image, icon: Icon }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.58))]" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-brand-navy shadow-md backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 h-auto px-0 text-sm font-semibold text-brand-orange hover:bg-transparent hover:text-brand-orange-dark"
                >
                  <a href="#bewerbung">
                    Jobs ansehen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
