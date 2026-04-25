import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = '404 – Seite nicht gefunden | YuTu Staff Solutions';

    // Tell crawlers this page should not be indexed.
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex,follow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <main className="bg-white">
      <section className="bg-slate-950 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Zur Startseite
          </Link>

          <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange">
            <span className="h-px w-10 bg-orange" aria-hidden="true" />
            Fehler 404
          </div>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Diese Seite gibt's leider nicht.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Vielleicht hat sich der Link verschoben oder es gab einen Tippfehler. Geh zurück
            zur Startseite oder ruf uns direkt an – wir helfen schnell weiter.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full px-6">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Zur Startseite
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white/15">
              <a href="tel:+436641485854">
                <Phone className="mr-2 h-4 w-4" />
                +43 664 1485854
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">Beliebte Seiten</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { to: '/#bewerbung', label: 'Jetzt bewerben' },
            { to: '/#einsatzbereiche', label: 'Einsatzbereiche' },
            { to: '/#partner', label: 'Für Partnerbetriebe' },
            { to: '/#faq', label: 'Häufige Fragen' },
          ].map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-semibold text-slate-900 transition hover:border-orange/40 hover:bg-orange/5"
              >
                {link.label}
                <ArrowLeft className="h-4 w-4 rotate-180 text-orange" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
