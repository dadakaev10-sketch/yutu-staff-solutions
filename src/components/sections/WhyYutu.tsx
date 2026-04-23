import { BadgeEuro, Clock3, HeartHandshake, MapPinned, Rocket, Users } from 'lucide-react';

const featureCards = [
  {
    icon: Clock3,
    title: 'Flexible Arbeitszeiten',
    description: 'Schichten rund um Studium, Familie oder Hauptjob.',
  },
  {
    icon: MapPinned,
    title: 'Persoenlich & regional',
    description: 'Wir vermitteln Jobs in Wien, Linz, Graz und Umgebung mit echtem lokalem Bezug.',
  },
  {
    icon: BadgeEuro,
    title: 'Faire Bezahlung',
    description: 'Transparente Stundensaetze und puenktliche Auszahlung.',
  },
  {
    icon: Rocket,
    title: 'Schnell vom Kontakt zum Einsatz',
    description: 'Wir melden uns in der Regel innerhalb von 24 Stunden zurueck.',
  },
  {
    icon: HeartHandshake,
    title: 'Einfach bewerben',
    description: 'Kein Anschreiben, kein Lebenslauf-Zwang, keine unnoetigen Huerden.',
  },
  {
    icon: Users,
    title: 'Alle willkommen',
    description: 'Wir matchen nach Motivation, Verfuegbarkeit und Einsatzbereich.',
  },
];

export function WhyYutu() {
  return (
    <section id="branchen" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-brand-orange">
            Warum YuTu?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Persoenlich, regional und schnell zum passenden Job.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            YuTu verbindet Menschen mit flexiblen Einsaetzen in ihrer Region. Der Fokus liegt auf ehrlicher Kommunikation,
            kurzen Wegen und Jobs, die wirklich zum Alltag passen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white transition group-hover:bg-brand-orange">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
