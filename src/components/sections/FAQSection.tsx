import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqs = [
  {
    question: 'Brauche ich einen Lebenslauf, um mich zu bewerben?',
    answer:
      'Nein. Ein Lebenslauf ist bei uns optional. Du kannst ihn hochladen - musst aber nicht. Uns reichen deine Kontaktdaten und deine Wunsch-Branche.',
  },
  {
    question: 'Wie schnell melde ich mich nach der Bewerbung?',
    answer:
      'Wir melden uns in der Regel innerhalb von 24 Stunden per Telefon oder E-Mail bei dir zurueck - oft sogar schneller.',
  },
  {
    question: 'Ist die Bewerbung wirklich kostenlos?',
    answer:
      'Ja, zu 100 %. Fuer Bewerber:innen fallen bei YuTu nie Kosten an - weder fuer die Vermittlung noch fuer den Einsatz.',
  },
  {
    question: 'Ab welchem Alter kann ich mitmachen?',
    answer:
      'Du musst mindestens 15 Jahre alt sein. Fuer manche Einsatzbereiche (z. B. Security oder Gastronomie mit Alkoholausschank) gelten hoehere Altersgrenzen.',
  },
  {
    question: 'Kann ich Vollzeit oder nur nebenbei arbeiten?',
    answer:
      'Beides ist moeglich. Egal ob Minijob, Nebenjob, Ferienjob oder Vollzeit - wir finden den passenden Einsatz fuer deine Zeitfenster.',
  },
  {
    question: 'Welche Unterlagen brauche ich, wenn es losgeht?',
    answer:
      'Fuer den ersten Einsatz brauchst du: Reisepass oder Fuehrerschein (bzw. Aufenthaltstitel), e-card und Meldezettel. Ohne oesterreichische Staatsbuergerschaft zusaetzlich einen Nachweis ueber den freien Zugang zum Arbeitsmarkt. Alles Weitere klaeren wir persoenlich mit dir.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-brand-green">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Haeufige Fragen
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Alles Wichtige rund um Bewerbung, Ablauf und Einsatz auf einen Blick.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 sm:p-6">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5"
              >
                <AccordionTrigger className="text-left text-base font-bold tracking-tight text-slate-950 hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-7 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
