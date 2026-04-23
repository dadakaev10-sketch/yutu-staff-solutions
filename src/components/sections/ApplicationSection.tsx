import { useEffect, useRef } from 'react';
import { Clock3, MapPin, PhoneCall, UploadCloud } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const branchOptions = [
  'Gastronomie', 'Reinigung', 'Event', 'Security',
  'Hotellerie', 'Logistik', 'Produktion', 'Handel', 'Sonstiges',
];

const availabilityOptions = [
  'Sofort verfügbar', 'Unter der Woche', 'Abends', 'Wochenende',
  'Teilzeit', 'Vollzeit', 'Nach Absprache',
];

export function ApplicationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoBadgesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (infoRef.current) {
        gsap.set(infoRef.current, { opacity: 0, x: -40 });
        ScrollTrigger.create({
          trigger: infoRef.current,
          start: 'top 88%',
          onEnter: () => gsap.to(infoRef.current, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }),
          once: true,
        });
      }

      const badges = infoBadgesRef.current.filter(Boolean) as HTMLDivElement[];
      if (badges.length) {
        gsap.set(badges, { opacity: 0, x: -20 });
        ScrollTrigger.create({
          trigger: badges[0],
          start: 'top 90%',
          onEnter: () => gsap.to(badges, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }),
          once: true,
        });
      }

      if (formRef.current) {
        gsap.set(formRef.current, { opacity: 0, x: 40 });
        ScrollTrigger.create({
          trigger: formRef.current,
          start: 'top 88%',
          onEnter: () => gsap.to(formRef.current, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }),
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="bewerbung" className="bg-white dark:bg-[#1a1a1a] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div ref={infoRef} className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-orange-50 dark:bg-white/10 px-4 py-1 text-sm font-semibold text-orange">
              Jetzt bewerben
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              In 2 Minuten zum passenden Einsatz
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-white/70 font-opensans">
              Schnell bewerben, persönliche Rückmeldung erhalten und passende Jobs in deiner Region finden.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Clock3, title: 'Schnelle Rückmeldung', desc: 'Wir melden uns in der Regel innerhalb von 24 Stunden.', color: 'bg-gray-900 dark:bg-white/10' },
                { icon: MapPin, title: 'Regional & passend', desc: 'Wir schauen auf Wohnort, Verfügbarkeit und Einsatzbereich.', color: 'bg-[#10B981]' },
                { icon: PhoneCall, title: 'Persönlicher Kontakt', desc: 'Keine anonyme Massenabwicklung - wir sprechen persönlich mit dir.', color: 'bg-orange' },
              ].map(({ icon: Icon, title, desc, color }, i) => (
                <div
                  key={title}
                  ref={(el) => { infoBadgesRef.current[i] = el; }}
                  className="flex gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-4"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{title}</div>
                    <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70 font-opensans">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={formRef} className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-xl sm:p-8">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="d8839665-14bd-48f6-ab28-effc6add4b2d" />
              <input type="hidden" name="subject" value="Neue Bewerbung - YuTu Staff Solutions" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="vorname" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Vorname</label>
                  <input id="vorname" name="vorname" type="text" autoComplete="given-name" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="Vorname" />
                </div>
                <div>
                  <label htmlFor="nachname" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Nachname</label>
                  <input id="nachname" name="nachname" type="text" autoComplete="family-name" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="Nachname" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefon" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Telefonnummer</label>
                  <input id="telefon" name="telefon" type="tel" autoComplete="tel" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="+43 ..." />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">E-Mail</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="name@email.at" />
                </div>
              </div>

              <div>
                <label htmlFor="stadt" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">PLZ / Stadt</label>
                <input id="stadt" name="stadt" type="text" autoComplete="address-level2" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="z. B. 4020 Linz" />
              </div>

              <div>
                <p className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Gewünschte Branche</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {branchOptions.map((option) => (
                    <label key={option} className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-white/80 transition hover:border-orange hover:bg-orange/5 has-[:checked]:border-orange has-[:checked]:bg-orange/10 has-[:checked]:text-orange">
                      <input type="checkbox" name="branche" value={option} className="accent-orange" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="verfügbarkeit" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Verfügbarkeit</label>
                <select id="verfügbarkeit" name="verfügbarkeit" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/20" defaultValue="">
                  <option value="" disabled>Bitte wählen</option>
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="datei" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Datei-Upload (optional)</label>
                <label htmlFor="datei" className="flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-gray-300 dark:border-white/20 bg-gray-50 dark:bg-white/5 px-6 py-8 text-center transition hover:border-orange hover:bg-orange/5">
                  <UploadCloud className="h-7 w-7 text-orange" />
                  <span className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">Lebenslauf, Zeugnisse oder Unterlagen hochladen</span>
                  <span className="mt-1 text-sm text-gray-500 dark:text-white/50">PDF, JPG oder PNG</span>
                </label>
                <input id="datei" name="datei" type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" />
              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 px-4 py-3 text-sm leading-6 text-gray-600 dark:text-white/60 font-opensans">
                Mit dem Absenden stimmst du der Verarbeitung deiner Daten zur Bearbeitung deiner Bewerbung zu.
              </div>

              <Button type="submit" className="h-14 w-full rounded-full text-base font-semibold">
                Bewerbung absenden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
