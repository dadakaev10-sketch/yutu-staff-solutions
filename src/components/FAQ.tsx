import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Brauche ich einen Lebenslauf, um mich zu bewerben?',
    a: 'Nein. Ein Lebenslauf ist bei uns optional. Du kannst ihn hochladen — musst aber nicht. Uns reichen deine Kontaktdaten und deine Wunsch-Branche.',
  },
  {
    q: 'Wie schnell melde ich mich nach der Bewerbung?',
    a: 'Wir melden uns in der Regel innerhalb von 24 Stunden per Telefon oder E-Mail bei dir zurück — oft sogar schneller.',
  },
  {
    q: 'Ist die Bewerbung wirklich kostenlos?',
    a: 'Ja, zu 100 %. Für Bewerber:innen fallen bei YuTu nie Kosten an — weder für die Vermittlung noch für den Einsatz.',
  },
  {
    q: 'Ab welchem Alter kann ich mitmachen?',
    a: 'Du musst mindestens 15 Jahre alt sein. Für manche Einsatzbereiche (z. B. Security oder Gastronomie mit Alkoholausschank) gelten höhere Altersgrenzen.',
  },
  {
    q: 'Kann ich Vollzeit oder nur nebenbei arbeiten?',
    a: 'Beides ist möglich. Egal ob Minijob, Nebenjob, Ferienjob oder Vollzeit — wir finden den passenden Einsatz für deine Zeitfenster.',
  },
  {
    q: 'Welche Unterlagen brauche ich, wenn es losgeht?',
    a: 'Für den ersten Einsatz brauchst du: Reisepass oder Führerschein (bzw. Aufenthaltstitel), e-card und Meldezettel. Ohne österreichische Staatsbürgerschaft zusätzlich einen Nachweis über den freien Zugang zum Arbeitsmarkt. Alles Weitere klären wir persönlich mit dir.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-navy-dark scroll-mt-20">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <p className="font-display text-sm uppercase tracking-widest text-brand-orange">Häufige Fragen</p>
          <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl">FAQ</h2>
        </div>

        <ul className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-brand-navy-light/40"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/5 sm:px-6"
                >
                  <span className="font-display text-base uppercase tracking-wide sm:text-lg">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-orange transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-white/80 sm:px-6 sm:text-[17px]">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
