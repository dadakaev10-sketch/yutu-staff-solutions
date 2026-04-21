import { CheckCircle2 } from 'lucide-react';

const bereiche = ['Gastronomie', 'Reinigung', 'Event & Veranstaltung', 'Security'];

export function Einsatzbereiche() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="text-lg text-white/85 sm:text-xl">
            Du bist auf Jobsuche oder offen für neue Chancen? Dann bewirb dich schon jetzt und sichere dir einen Vorsprung!
          </p>

          <h2 className="heading-display mt-8 text-3xl sm:text-4xl lg:text-5xl">
            Einsatzbereiche:
          </h2>

          <ul className="mt-8 flex flex-col gap-4">
            {bereiche.map((b) => (
              <li key={b} className="flex items-center gap-4">
                <CheckCircle2 className="h-8 w-8 shrink-0 text-white" strokeWidth={2.25} />
                <span className="font-display text-xl uppercase tracking-wide sm:text-2xl">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full bg-brand-navy-light shadow-2xl shadow-black/30">
            <img
              src="/images/einsatzbereiche.jpg"
              alt="Servicekraft in der Gastronomie"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
