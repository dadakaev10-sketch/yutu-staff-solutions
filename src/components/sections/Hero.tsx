import { ArrowRight, Clock3, MapPin, ShieldCheck, Users } from 'lucide-react';
import { Button } from '../ui/Button';

const trustItems = [
  { icon: Users, value: '500+', label: 'Menschen im Einsatz' },
  { icon: ShieldCheck, value: '50+', label: 'Partner-Betriebe' },
  { icon: Clock3, value: '24h', label: 'Antwortzeit' },
  { icon: MapPin, value: '100%', label: 'kostenlos' },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 text-white" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,48,135,0.72),rgba(0,48,135,0.86))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(255,107,0,0.32),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-center px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              Persoenlich, regional, menschlich
            </div>

            <h1
              id="hero-heading"
              className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Dein Nebenjob.
              <br />
              Regional. Flexibel.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Schnell bewerben • Persoenliche Rueckmeldung • Jobs direkt in deiner Region
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <a href="#bewerbung">
                  Jetzt bewerben - in 2 Minuten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15"
              >
                <a href="#partner">Fuer Partnerbetriebe</a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustItems.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/20 text-brand-green">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-sm text-white/75">{label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-md rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">
                Schnell zum Einsatz
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white">
                Flexible Jobs in Wien, Linz, Graz und Umgebung
              </h2>
              <p className="mt-3 text-white/75">
                Ob Studium, Familie oder Hauptjob: Wir finden Einsaetze, die zu deinem Alltag passen.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/85">
                <li className="rounded-xl bg-white/10 px-4 py-3">Ohne Lebenslauf-Zwang</li>
                <li className="rounded-xl bg-white/10 px-4 py-3">Persoenlicher Kontakt statt Massenabfertigung</li>
                <li className="rounded-xl bg-white/10 px-4 py-3">Faire Bezahlung und schnelle Rueckmeldung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
