import { ArrowRight, BadgeEuro, Clock3, HeartHandshake, MapPinned } from 'lucide-react';
import { Button } from '../ui/Button';

const benefitRows = [
  {
    title: 'Flexible Arbeitszeiten',
    description:
      'Schichten rund um Studium, Familie oder Hauptjob. Du entscheidest mit, wann und wie oft du arbeiten willst.',
    image: '/images/benefit-flexibel.jpg',
    icon: Clock3,
  },
  {
    title: 'Persoenlich & regional',
    description:
      'Wir kennen unsere Partnerbetriebe und schauen genau, welcher Einsatz zu dir, deinem Wohnort und deiner Verfuegbarkeit passt.',
    image: '/images/benefit-persoenlich.jpg',
    icon: MapPinned,
  },
  {
    title: 'Faire Bezahlung',
    description:
      'Transparente Stundensaetze, klare Kommunikation und puenktliche Auszahlung. So soll Personaldienstleistung sein.',
    image: '/images/benefit-fair.jpg',
    icon: BadgeEuro,
  },
  {
    title: 'Schnell vom Kontakt zum Einsatz',
    description:
      'Kein unnoetiger Papierkram, kein komplizierter Prozess. Wir melden uns schnell und bringen dich zuegig in passende Einsaetze.',
    image: '/images/benefit-schnell.jpg',
    icon: HeartHandshake,
  },
];

export function Vorteile() {
  return (
    <section id="vorteile" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-brand-navy">
            Vorteile
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Flexibel arbeiten. Fair bezahlt werden. Menschlich begleitet.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            YuTu verbindet schnelle Prozesse mit persoenlicher Betreuung. Genau das macht den Unterschied zwischen
            irgendeinem Job und einem Einsatz, der wirklich passt.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {benefitRows.map(({ title, description, image, icon: Icon }, index) => (
            <div
              key={title}
              className={`grid gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-8 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
              }`}
            >
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] sm:h-80">
                <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,48,135,0.24))]" />
              </div>

              <div className="max-w-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-lg shadow-blue-900/20">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 h-auto px-0 text-base font-semibold text-brand-orange hover:bg-transparent hover:text-brand-orange-dark"
                >
                  <a href="#bewerbung">
                    Jetzt bewerben
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
