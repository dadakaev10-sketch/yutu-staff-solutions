import { Clock3, MapPin, PhoneCall, UploadCloud } from 'lucide-react';
import { Button } from '../ui/Button';

const branchOptions = [
  'Gastronomie',
  'Reinigung',
  'Event',
  'Security',
  'Hotellerie',
  'Logistik',
  'Produktion',
  'Handel',
  'Sonstiges',
];

const availabilityOptions = [
  'Sofort verfügbar',
  'Unter der Woche',
  'Abends',
  'Wochenende',
  'Teilzeit',
  'Vollzeit',
  'Nach Absprache',
];

export function ApplicationSection() {
  return (
    <section id="bewerbung" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-brand-orange">
              Jetzt bewerben
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              In 2 Minuten zum passenden Einsatz
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Schnell bewerben, persönliche Rückmeldung erhalten und passende Jobs in deiner Region finden.
              Ohne komplizierten Prozess und ohne unnötige Hürden.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-white">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-950">Schnelle Rückmeldung</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Wir melden uns in der Regel innerhalb von 24 Stunden.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-950">Regional & passend</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Wir schauen auf Wohnort, Verfügbarkeit und Einsatzbereich.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange text-white">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-950">Persönlicher Kontakt</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Keine anonyme Massenabwicklung - wir sprechen persönlich mit dir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
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
                  <label htmlFor="vorname" className="mb-2 block text-sm font-semibold text-slate-700">Vorname</label>
                  <input id="vorname" name="vorname" type="text" autoComplete="given-name" required className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="Vorname" />
                </div>

                <div>
                  <label htmlFor="nachname" className="mb-2 block text-sm font-semibold text-slate-700">Nachname</label>
                  <input id="nachname" name="nachname" type="text" autoComplete="family-name" required className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="Nachname" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefon" className="mb-2 block text-sm font-semibold text-slate-700">Telefonnummer</label>
                  <input id="telefon" name="telefon" type="tel" autoComplete="tel" required className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="+43 ..." />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">E-Mail</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="name@email.at" />
                </div>
              </div>

              <div>
                <label htmlFor="stadt" className="mb-2 block text-sm font-semibold text-slate-700">PLZ / Stadt</label>
                <input id="stadt" name="stadt" type="text" autoComplete="address-level2" required className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-navy focus:ring-4 focus:ring-blue-100" placeholder="z. B. 4020 Linz" />
              </div>

              <div>
                <p className="mb-2 block text-sm font-semibold text-slate-700">Gewünschte Branche</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {branchOptions.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-brand-navy hover:bg-blue-50 has-[:checked]:border-brand-navy has-[:checked]:bg-blue-50 has-[:checked]:text-brand-navy"
                    >
                      <input type="checkbox" name="branche" value={option} className="accent-brand-navy" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="verfügbarkeit" className="mb-2 block text-sm font-semibold text-slate-700">Verfügbarkeit</label>
                <select id="verfügbarkeit" name="verfügbarkeit" required className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-900 outline-none transition focus:border-brand-navy focus:ring-4 focus:ring-blue-100" defaultValue="">
                  <option value="" disabled>Bitte wählen</option>
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="datei" className="mb-2 block text-sm font-semibold text-slate-700">Datei-Upload (optional)</label>
                <label htmlFor="datei" className="flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-brand-orange hover:bg-orange-50/40">
                  <UploadCloud className="h-7 w-7 text-brand-orange" />
                  <span className="mt-3 text-sm font-semibold text-slate-800">Lebenslauf, Zeugnisse oder Unterlagen hochladen</span>
                  <span className="mt-1 text-sm text-slate-500">PDF, JPG oder PNG</span>
                </label>
                <input id="datei" name="datei" type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" />
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
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
