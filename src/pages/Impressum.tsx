import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Impressum() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Impressum | YuTu Staff Solutions';
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
            Impressum
          </h1>
          <p className="mt-3 text-white/70">
            Offenlegung gemäß §5 ECG, §14 UGB, §63 GewO und §25 Mediengesetz.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-10 px-4 py-16 text-slate-700 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-950">Medieninhaber & Diensteanbieter</h2>
          <div className="mt-4 space-y-1 leading-7">
            <p className="font-semibold text-slate-900">YuTu Staff Solutions</p>
            <p>[FIRMENWORTLAUT laut Firmenbuch]</p>
            <p>[STRASSE, HAUSNUMMER]</p>
            <p>[PLZ, ORT]</p>
            <p>Österreich</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">Kontakt</h2>
          <div className="mt-4 space-y-1 leading-7">
            <p>
              Telefon:{' '}
              <a href="tel:+436641485854" className="text-brand-navy underline-offset-4 hover:underline">
                +43 664 1485854
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:office@yutustaff.at" className="text-brand-navy underline-offset-4 hover:underline">
                office@yutustaff.at
              </a>
            </p>
            <p>
              Web:{' '}
              <a href="https://yutustaff.at" className="text-brand-navy underline-offset-4 hover:underline">
                yutustaff.at
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">Unternehmensdaten</h2>
          <div className="mt-4 space-y-1 leading-7">
            <p>Rechtsform: [z. B. Einzelunternehmen / GmbH]</p>
            <p>Firmenbuchnummer: [FN XXXXXX]</p>
            <p>Firmenbuchgericht: [Handelsgericht XYZ]</p>
            <p>UID-Nummer: [ATU XXXXXXXX]</p>
            <p>GLN: [falls vorhanden]</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">Berufsrechtliche Angaben</h2>
          <div className="mt-4 space-y-1 leading-7">
            <p>Gewerbe: Überlassung von Arbeitskräften (Arbeitskräfteüberlassung)</p>
            <p>Verleihzulassung gem. AÜG: [BESCHEIDNUMMER]</p>
            <p>
              Gewerbebehörde: [BEZIRKSHAUPTMANNSCHAFT / MAGISTRAT]
            </p>
            <p>
              Mitglied der WKO – Fachgruppe für die gewerblichen Dienstleister
            </p>
            <p>
              Anwendbare Rechtsvorschriften: GewO, AÜG, AVRAG, Arbeitszeit- und
              Arbeitsruhegesetz, Kollektivverträge der jeweiligen Branche – einsehbar
              auf{' '}
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-navy underline-offset-4 hover:underline"
              >
                ris.bka.gv.at
              </a>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">Online-Streitbeilegung</h2>
          <p className="mt-4 leading-7">
            Verbraucher haben die Möglichkeit, Beschwerden an die EU-Online-Streitbeilegungsplattform
            zu richten:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy underline-offset-4 hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">Haftung für Inhalte</h2>
          <p className="mt-4 leading-7">
            Wir entwickeln die Inhalte dieser Website mit größter Sorgfalt. Eine Haftung
            oder Garantie für Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten
            Informationen kann jedoch nicht übernommen werden. Hinweise auf Fehler nehmen wir
            gerne entgegen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">Urheberrecht</h2>
          <p className="mt-4 leading-7">
            Alle Inhalte dieser Website (Texte, Bilder, Logos, Grafiken) sind urheberrechtlich
            geschützt. Eine Verwendung – auch auszugsweise – ist nur mit schriftlicher Zustimmung
            der YuTu Staff Solutions zulässig.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-950">Bildnachweise</h2>
          <p className="mt-4 leading-7">
            Bildquellen: [eigene Aufnahmen / Lizenzgeber, z. B. Unsplash, Pexels, Adobe Stock].
          </p>
        </section>

        <p className="border-t border-slate-200 pt-6 text-sm text-slate-500">
          Stand: [Datum letzte Aktualisierung]. Mit „[…]“ markierte Felder sind Platzhalter und
          werden mit den endgültigen Unternehmensdaten ersetzt, sobald diese vorliegen.
        </p>
      </article>
    </main>
  );
}
