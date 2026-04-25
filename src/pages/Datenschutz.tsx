import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Datenschutz() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Datenschutz | YuTu Staff Solutions';
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
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 text-white/70">
            Information zur Verarbeitung personenbezogener Daten gemäß DSGVO und
            österreichischem Datenschutzgesetz (DSG).
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-10 px-4 py-16 text-slate-700 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-950">1. Verantwortlicher</h2>
          <div className="mt-4 space-y-1 leading-7">
            <p className="font-semibold text-slate-900">YuTu Staff Solutions</p>
            <p>[FIRMENWORTLAUT]</p>
            <p>[STRASSE, HAUSNUMMER]</p>
            <p>[PLZ, ORT], Österreich</p>
            <p>
              Telefon:{' '}
              <a href="tel:+436641485854" className="text-brand-navy underline-offset-4 hover:underline">
                +43 664 1485854
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:datenschutz@yutustaff.at" className="text-brand-navy underline-offset-4 hover:underline">
                datenschutz@yutustaff.at
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">2. Welche Daten wir verarbeiten</h2>
          <p className="mt-4 leading-7">
            Wir verarbeiten ausschließlich Daten, die Sie uns aktiv über Formulare, per E-Mail
            oder telefonisch übermitteln. Konkret können das sein:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>Name, Vorname</li>
            <li>Telefonnummer und E-Mail-Adresse</li>
            <li>Wohnort / Bundesland</li>
            <li>Wunschbranche, Verfügbarkeit, Berufserfahrung (sofern angegeben)</li>
            <li>Bei Partnerbetrieben: Firmenname, Ansprechperson, Branche, Bedarf</li>
            <li>
              Technische Zugriffsdaten (IP-Adresse, Browser, Betriebssystem, Zeitpunkt) – nur in
              Server-Logs und nach kurzer Zeit anonymisiert
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">3. Zweck und Rechtsgrundlage</h2>
          <p className="mt-4 leading-7">
            Die Verarbeitung erfolgt zu folgenden Zwecken auf folgenden Rechtsgrundlagen:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
            <li>
              <span className="font-semibold text-slate-900">Bewerbung & Vermittlung</span> – zur
              Anbahnung und Durchführung eines Beschäftigungs- oder Überlassungsverhältnisses
              (Art. 6 Abs. 1 lit. b DSGVO).
            </li>
            <li>
              <span className="font-semibold text-slate-900">Kontaktanfragen von Betrieben</span>{' '}
              – zur Erfüllung vorvertraglicher Maßnahmen und vertraglicher Pflichten
              (Art. 6 Abs. 1 lit. b DSGVO).
            </li>
            <li>
              <span className="font-semibold text-slate-900">Website-Betrieb</span> – zur Sicherstellung
              eines stabilen, sicheren Betriebs (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO).
            </li>
            <li>
              <span className="font-semibold text-slate-900">Gesetzliche Aufbewahrung</span> –
              steuer- und arbeitsrechtliche Aufbewahrungspflichten (Art. 6 Abs. 1 lit. c DSGVO).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">4. Empfänger und Auftragsverarbeiter</h2>
          <p className="mt-4 leading-7">
            Eine Weitergabe an Dritte findet nur statt, wenn dies zur Vertragserfüllung notwendig
            ist oder eine gesetzliche Verpflichtung besteht. Folgende externe Dienstleister können
            in unserem Auftrag personenbezogene Daten verarbeiten:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
            <li>
              <span className="font-semibold text-slate-900">Web3Forms</span> (Formularversand) –
              Verarbeitung von Formulareingaben, um eingehende Bewerbungen und Anfragen per E-Mail
              an uns zuzustellen. Datenschutz:{' '}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-navy underline-offset-4 hover:underline"
              >
                web3forms.com/privacy
              </a>
              .
            </li>
            <li>
              <span className="font-semibold text-slate-900">Vercel Inc.</span> (Hosting) – Bereitstellung
              der Website und der dazugehörigen Server-Infrastruktur. Datenschutz:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-navy underline-offset-4 hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </li>
            <li>
              <span className="font-semibold text-slate-900">Partnerbetriebe</span> – nur dann, wenn
              und soweit eine Vermittlung gewünscht ist und Sie ausdrücklich zustimmen.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">5. Speicherdauer</h2>
          <p className="mt-4 leading-7">
            Bewerbungsdaten werden für maximal 12 Monate gespeichert, sofern es nicht zu einer
            Vermittlung oder Anstellung kommt. Im Fall einer Anstellung gelten die gesetzlichen
            Aufbewahrungsfristen (z. B. 7 Jahre nach BAO, 30 Jahre für sozialversicherungs-
            relevante Unterlagen). Server-Logs werden nach maximal 30 Tagen anonymisiert oder
            gelöscht.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">6. Ihre Rechte</h2>
          <p className="mt-4 leading-7">
            Sie haben gegenüber uns jederzeit folgende Rechte:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-3 leading-7">
            Anfragen bitte an{' '}
            <a href="mailto:datenschutz@yutustaff.at" className="text-brand-navy underline-offset-4 hover:underline">
              datenschutz@yutustaff.at
            </a>
            . Sie haben darüber hinaus das Recht auf Beschwerde bei der Datenschutzbehörde.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">7. Aufsichtsbehörde</h2>
          <div className="mt-4 space-y-1 leading-7">
            <p className="font-semibold text-slate-900">Österreichische Datenschutzbehörde</p>
            <p>Barichgasse 40–42, 1030 Wien</p>
            <p>
              Telefon: <a href="tel:+43152115202" className="text-brand-navy underline-offset-4 hover:underline">+43 1 52 152-0</a>
            </p>
            <p>
              Web:{' '}
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-navy underline-offset-4 hover:underline"
              >
                dsb.gv.at
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">8. Cookies & Tracking</h2>
          <p className="mt-4 leading-7">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den
            stabilen Betrieb der Seite erforderlich sind. Es findet derzeit{' '}
            <span className="font-semibold text-slate-900">kein Tracking</span>, kein Profiling und
            keine Einbindung von Marketing- oder Analytics-Diensten statt. Sollte sich dies ändern,
            werden wir Sie an dieser Stelle informieren und – wo erforderlich – Ihre Einwilligung
            einholen.
          </p>
        </section>

        <p className="border-t border-slate-200 pt-6 text-sm text-slate-500">
          Stand: [Datum letzte Aktualisierung]. Mit „[…]“ markierte Felder werden mit den endgültigen
          Unternehmensdaten ersetzt, sobald diese vorliegen.
        </p>
      </article>
    </main>
  );
}
