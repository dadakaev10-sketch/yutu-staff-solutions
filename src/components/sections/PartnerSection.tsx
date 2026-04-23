import { ArrowRight, BriefcaseBusiness, Building2, Clock3, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const partnerBenefits = [
  {
    icon: Clock3,
    title: 'Schnell verfuegbare Unterstuetzung',
    description:
      'Ob kurzfristige Ausfaelle, Stosszeiten oder saisonaler Mehrbedarf: YuTu vermittelt schnell passendes Personal.',
  },
  {
    icon: Users,
    title: 'Persönlich abgestimmte Besetzung',
    description:
      'Wir achten nicht nur auf Verfügbarkeit, sondern auch auf Einsatzbereich, Teamfit und regionale Naehe.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Flexibel für viele Branchen',
    description:
      'Von Gastronomie ueber Event bis Logistik und Reinigung - wir unterstützen Betriebe dort, wo sie Entlastung brauchen.',
  },
];

export function PartnerSection() {
  return (
    <section id="partner" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-2xl shadow-blue-900/20 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-brand-green">
              Für Partnerbetriebe / Personalbedarf
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Verlaessliches Personal. Schnell, flexibel und menschlich.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              YuTu unterstuetzt Betriebe in Wien, Linz, Graz und Umgebung mit flexiblen Mitarbeiter:innen für
              Gastronomie, Reinigung, Event, Security, Handel, Logistik und mehr. Persönlich abgestimmt statt
              anonymer Standardloesung.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-13 rounded-full px-6 text-sm font-semibold">
                <a href="#kontakt-betriebe">
                  Personal anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="h-13 rounded-full border-white/20 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/15">
                <a href="#bewerbung">Auch Bewerber suchen</a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {partnerBenefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/20 text-brand-green">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-bold tracking-tight text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="kontakt-betriebe" className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">Kurz Personalbedarf senden</h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                Du suchst verlaessliche Unterstuetzung für dein Team? Sende uns die wichtigsten Infos und wir melden
                uns zeitnah mit einer passenden Rückmeldung.
              </p>
            </div>

            <form className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="betrieb-name" className="mb-2 block text-sm font-semibold text-slate-700">Betrieb / Unternehmen</label>
                <input id="betrieb-name" type="text" className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="Name des Betriebs" />
              </div>

              <div>
                <label htmlFor="betrieb-kontakt" className="mb-2 block text-sm font-semibold text-slate-700">Ansprechpartner:in</label>
                <input id="betrieb-kontakt" type="text" className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="Vor- und Nachname" />
              </div>

              <div>
                <label htmlFor="betrieb-email" className="mb-2 block text-sm font-semibold text-slate-700">E-Mail</label>
                <input id="betrieb-email" type="email" className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="kontakt@betrieb.at" />
              </div>

              <div>
                <label htmlFor="betrieb-telefon" className="mb-2 block text-sm font-semibold text-slate-700">Telefonnummer</label>
                <input id="betrieb-telefon" type="tel" className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="+43 ..." />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="betrieb-bedarf" className="mb-2 block text-sm font-semibold text-slate-700">Was wird benoetigt?</label>
                <textarea id="betrieb-bedarf" rows={5} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="z. B. 4 Servicekraefte für Event, kurzfristig ab naechster Woche in Wien" />
              </div>

              <div className="sm:col-span-2">
                <Button type="button" className="h-13 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white hover:bg-brand-navy-dark">
                  Anfrage senden
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
