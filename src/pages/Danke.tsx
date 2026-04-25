import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock3, MailOpen, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';

type ThankYouCopy = {
  badge: string;
  heading: string;
  intro: string;
  nextSteps: { icon: typeof Clock3; title: string; description: string }[];
};

const copyByType: Record<string, ThankYouCopy> = {
  bewerbung: {
    badge: 'Bewerbung erhalten',
    heading: 'Danke! Wir melden uns persönlich.',
    intro:
      'Deine Bewerbung ist bei uns eingegangen. Wir prüfen deine Angaben und melden uns innerhalb der nächsten 24 Stunden persönlich – per Telefon oder E-Mail.',
    nextSteps: [
      {
        icon: Clock3,
        title: 'Persönliche Rückmeldung',
        description: 'Innerhalb von 24 Stunden bekommst du Bescheid – ohne automatisierte Antworten.',
      },
      {
        icon: MailOpen,
        title: 'Bestätigung per E-Mail',
        description: 'Eine kurze Eingangsbestätigung schicken wir dir gleich an deine angegebene Adresse.',
      },
      {
        icon: Phone,
        title: 'Direkt erreichbar',
        description: 'Du hast eine Frage oder willst etwas ergänzen? Ruf uns einfach unter +43 664 1485854 an.',
      },
    ],
  },
  partner: {
    badge: 'Anfrage erhalten',
    heading: 'Danke für deine Anfrage.',
    intro:
      'Deine Personalanfrage ist eingegangen. Wir schauen die Eckdaten gleich an und melden uns innerhalb von 24 Stunden mit einer passenden Rückmeldung.',
    nextSteps: [
      {
        icon: Clock3,
        title: 'Schnelle Erstrückmeldung',
        description: 'In den meisten Fällen melden wir uns noch am selben oder nächsten Werktag bei dir.',
      },
      {
        icon: MailOpen,
        title: 'Bestätigung per E-Mail',
        description: 'Eine kurze Eingangsbestätigung schicken wir dir an die angegebene E-Mail-Adresse.',
      },
      {
        icon: Phone,
        title: 'Direkt erreichbar',
        description: 'Dringender Bedarf? Ruf uns direkt unter +43 664 1485854 an – wir helfen schnell.',
      },
    ],
  },
};

const fallback = copyByType.bewerbung;

export function Danke() {
  const [params] = useSearchParams();
  const type = params.get('type') ?? 'bewerbung';
  const copy = copyByType[type] ?? fallback;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Danke | YuTu Staff Solutions';
  }, []);

  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Zur Startseite
          </Link>

          <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange">
            <span className="h-px w-10 bg-orange" aria-hidden="true" />
            {copy.badge}
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {copy.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
            {copy.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">Wie es jetzt weitergeht</h2>
        <ul className="mt-8 space-y-4">
          {copy.nextSteps.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white"
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-base font-bold text-slate-900">{title}</div>
                <p className="mt-1 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-full px-6">
            <Link to="/">Zurück zur Startseite</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <a href="tel:+436641485854">
              <Phone className="mr-2 h-4 w-4" />
              +43 664 1485854
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
