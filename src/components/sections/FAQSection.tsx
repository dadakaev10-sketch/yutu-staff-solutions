import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Brauche ich einen Lebenslauf, um mich zu bewerben?',
    answer: 'Nein. Ein Lebenslauf ist bei uns optional. Du kannst ihn hochladen - musst aber nicht. Uns reichen deine Kontaktdaten und deine Wunsch-Branche.',
  },
  {
    question: 'Wie schnell melde ich mich nach der Bewerbung?',
    answer: 'Wir melden uns in der Regel innerhalb von 24 Stunden per Telefon oder E-Mail bei dir zurück - oft sogar schneller.',
  },
  {
    question: 'Ist die Bewerbung wirklich kostenlos?',
    answer: 'Ja, zu 100 %. Für Bewerber:innen fallen bei YuTu nie Kosten an - weder für die Vermittlung noch für den Einsatz.',
  },
  {
    question: 'Ab welchem Alter kann ich mitmachen?',
    answer: 'Du musst mindestens 15 Jahre alt sein. Für manche Einsatzbereiche (z. B. Security oder Gastronomie mit Alkoholausschank) gelten höhere Altersgrenzen.',
  },
  {
    question: 'Kann ich Vollzeit oder nur nebenbei arbeiten?',
    answer: 'Beides ist möglich. Egal ob Minijob, Nebenjob, Ferienjob oder Vollzeit - wir finden den passenden Einsatz für deine Zeitfenster.',
  },
  {
    question: 'Welche Unterlagen brauche ich, wenn es losgeht?',
    answer: 'Für den ersten Einsatz brauchst du: Reisepass oder Führerschein (bzw. Aufenthaltstitel), e-card und Meldezettel. Ohne österreichische Staatsbürgerschaft zusätzlich einen Nachweis über den freien Zugang zum Arbeitsmarkt.',
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: headingRef.current,
          start: 'top 90%',
          onEnter: () => gsap.to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
          once: true,
        });
      }

      if (accordionRef.current) {
        gsap.set(accordionRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: accordionRef.current,
          start: 'top 90%',
          onEnter: () => gsap.to(accordionRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 0.1, ease: 'power3.out' }),
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="bg-white dark:bg-[#111] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center">
          <span className="inline-flex rounded-full bg-emerald-50 dark:bg-white/10 px-4 py-1 text-sm font-semibold text-[#10B981]">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-white/70 font-opensans">
            Alles Wichtige rund um Bewerbung, Ablauf und Einsatz auf einen Blick.
          </p>
        </div>

        <div ref={accordionRef} className="mt-12 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-4 sm:p-6">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5"
              >
                <AccordionTrigger className="text-left text-base font-bold tracking-tight text-gray-900 dark:text-white hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-7 text-gray-600 dark:text-white/70 font-opensans">
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
