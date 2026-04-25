import { useEffect, useRef } from 'react';
import { Award, MapPin, Scale, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trustSignals = [
  {
    icon: Scale,
    title: 'AÜG-konform',
    description: 'Geprüfte Arbeitskräfteüberlassung nach österreichischem Recht.',
  },
  {
    icon: Award,
    title: 'WKO-Mitglied',
    description: 'Mitglied der Wirtschaftskammer Österreich – verbindliche Standards.',
  },
  {
    icon: ShieldCheck,
    title: 'DSGVO & Diskret',
    description: 'Deine Daten bleiben geschützt. Keine Weitergabe ohne Zustimmung.',
  },
  {
    icon: MapPin,
    title: 'Regional verankert',
    description: 'Persönliche Betreuung in Wien, Linz, Graz und Umgebung.',
  },
];

export function TrustStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: items[0],
        start: 'top 92%',
        onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }),
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Vertrauenssignale"
      className="border-y border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-[#111]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="flex items-start gap-4"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy dark:bg-white/10 dark:text-white"
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                  {title}
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/65">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
