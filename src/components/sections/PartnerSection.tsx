import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Clock3, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const partnerBenefits = [
  {
    icon: Clock3,
    title: 'Schnell verfügbare Unterstützung',
    description: 'Ob kurzfristige Ausfälle, Stoßzeiten oder saisonaler Mehrbedarf: YuTu vermittelt schnell passendes Personal.',
  },
  {
    icon: Users,
    title: 'Persönlich abgestimmte Besetzung',
    description: 'Wir achten nicht nur auf Verfügbarkeit, sondern auch auf Einsatzbereich, Teamfit und regionale Nähe.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Flexibel für viele Branchen',
    description: 'Von Gastronomie über Event bis Logistik und Reinigung - wir unterstützen Betriebe dort, wo sie Entlastung brauchen.',
  },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function PartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroBoxRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const formBoxRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroBoxRef.current) {
        gsap.set(heroBoxRef.current, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger: heroBoxRef.current,
          start: 'top 88%',
          onEnter: () => gsap.to(heroBoxRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }),
          once: true,
        });
      }

      const benefits = benefitsRef.current.filter(Boolean) as HTMLDivElement[];
      if (benefits.length) {
        gsap.set(benefits, { opacity: 0, x: 40 });
        ScrollTrigger.create({
          trigger: benefits[0],
          start: 'top 90%',
          onEnter: () => gsap.to(benefits, { opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' }),
          once: true,
        });
      }

      if (formBoxRef.current) {
        gsap.set(formBoxRef.current, { opacity: 0, y: 30 });
        ScrollTrigger.create({
          trigger: formBoxRef.current,
          start: 'top 90%',
          onEnter: () => gsap.to(formBoxRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await response.json().catch(() => ({}));

      if (response.ok && (json.success ?? true)) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(json.message || 'Übertragung fehlgeschlagen. Bitte versuche es erneut.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Netzwerkfehler. Bitte überprüfe deine Verbindung und versuche es erneut.');
    }
  };

  return (
    <section ref={sectionRef} id="partner" className="bg-gray-50 dark:bg-[#0d0d0d] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={heroBoxRef}
          className="grid gap-10 overflow-hidden rounded-[2rem] bg-[#1a1a1a] dark:bg-[#111] px-6 py-8 text-white shadow-2xl sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14"
        >
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-[#10B981]">
              Für Partnerbetriebe / Personalbedarf
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Verlässliches Personal. Schnell, flexibel und menschlich.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 font-opensans">
              YuTu unterstützt Betriebe in Wien, Linz, Graz und Umgebung mit flexiblen Mitarbeiter:innen für
              Gastronomie, Reinigung, Event, Security, Handel, Logistik und mehr.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-13 rounded-full px-6 text-sm font-semibold">
                <a href="#kontakt-betriebe">
                  Personal anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="h-13 rounded-full border-white/20 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/15">
                <a href="tel:+436641485854">Direkt anrufen</a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {partnerBenefits.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                ref={(el) => { benefitsRef.current[i] = el; }}
                className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981]/20 text-[#10B981]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/75 font-opensans">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={formBoxRef}
          id="kontakt-betriebe"
          className="mt-8 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 dark:bg-white/10 text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kurz Personalbedarf senden</h3>
              <p className="mt-3 text-base leading-8 text-gray-600 dark:text-white/70 font-opensans">
                Du suchst verlässliche Unterstützung für dein Team? Sende uns die wichtigsten Infos und wir melden
                uns zeitnah mit einer passenden Rückmeldung.
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-white/50">
                Lieber direkt sprechen?{' '}
                <a href="tel:+436641485854" className="font-semibold text-brand-navy underline-offset-4 hover:underline">
                  +43 664 1485854
                </a>
              </p>
            </div>

            {status === 'success' ? (
              <div role="status" aria-live="polite" className="flex flex-col items-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Anfrage erhalten!
                </h3>
                <p className="mt-3 max-w-md text-base leading-7 text-gray-600 dark:text-white/70">
                  Vielen Dank für deine Anfrage. Wir melden uns innerhalb von 24 Stunden mit einer
                  passenden Rückmeldung.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-8 rounded-full"
                  onClick={() => setStatus('idle')}
                >
                  Weitere Anfrage senden
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <input type="hidden" name="access_key" value="d8839665-14bd-48f6-ab28-effc6add4b2d" />
                <input type="hidden" name="subject" value="Neue Personalanfrage - YuTu Staff Solutions" />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="betrieb-name" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Betrieb / Unternehmen</label>
                  <input id="betrieb-name" name="betrieb" type="text" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="Name des Betriebs" />
                </div>

                <div>
                  <label htmlFor="betrieb-kontakt" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Ansprechpartner:in</label>
                  <input id="betrieb-kontakt" name="ansprechpartner" type="text" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="Vor- und Nachname" />
                </div>

                <div>
                  <label htmlFor="betrieb-email" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">E-Mail</label>
                  <input id="betrieb-email" name="email" type="email" required className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="kontakt@betrieb.at" />
                </div>

                <div>
                  <label htmlFor="betrieb-telefon" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Telefonnummer</label>
                  <input id="betrieb-telefon" name="telefon" type="tel" className="h-12 w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="+43 ..." />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="betrieb-bedarf" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-white/80">Was wird benötigt?</label>
                  <textarea id="betrieb-bedarf" name="bedarf" rows={5} className="w-full rounded-lg border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-4 py-3 text-gray-900 dark:text-white outline-none transition placeholder:text-gray-400 focus:border-orange focus:ring-4 focus:ring-orange/20" placeholder="z. B. 4 Servicekräfte für Event, kurzfristig ab nächster Woche in Wien" />
                </div>

                <div className="sm:col-span-2 rounded-2xl bg-gray-50 dark:bg-white/5 px-4 py-3 text-sm leading-6 text-gray-600 dark:text-white/60 font-opensans">
                  Mit dem Absenden stimmst du der Verarbeitung deiner Daten zur Bearbeitung deiner Anfrage zu.
                  Details findest du in unserer{' '}
                  <Link to="/datenschutz" className="font-semibold text-brand-navy underline-offset-4 hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </div>

                {status === 'error' && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="sm:col-span-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="h-13 w-full rounded-full px-6 text-sm font-semibold disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'submitting' ? 'Wird gesendet …' : 'Anfrage senden'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
