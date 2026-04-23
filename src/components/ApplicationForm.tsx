import { useCallback, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Upload, X, FileText, Loader2, Clock3, PhoneCall, MapPinned } from 'lucide-react';
import { Button } from './ui/Button';
import { FieldWrapper, Input, Select } from './ui/Input';

const MAX_FILES = 5;
const MAX_FILE_SIZE_MB = 8;
const ACCEPTED = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];

const schema = z.object({
  vorname: z.string().min(2, 'Vorname fehlt'),
  nachname: z.string().min(2, 'Nachname fehlt'),
  adresse: z.string().min(5, 'Adresse unvollständig'),
  telefon: z
    .string()
    .min(6, 'Telefonnummer ungültig')
    .regex(/^[+()/\d\s-]+$/, 'Nur Zahlen & + ( ) - erlaubt'),
  email: z.string().email('E-Mail ungültig'),
  branche: z.enum(['Gastronomie', 'Reinigung', 'Event', 'Security', 'Sonstiges'], {
    errorMap: () => ({ message: 'Bitte Branche wählen' }),
  }),
  botField: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = 'idle' | 'submitting' | 'success' | 'error';

const steps = [
  { icon: Upload, title: 'Kurz ausfüllen', text: 'Deine Kontaktdaten und Wunsch-Branche reichen für den Start.' },
  { icon: PhoneCall, title: 'Persönlich sprechen', text: 'Wir melden uns schnell und klären Verfügbarkeit und Einsatzwünsche.' },
  { icon: MapPinned, title: 'Regional starten', text: 'Danach schlagen wir dir passende Jobs in deiner Nähe vor.' },
];

const trustPoints = ['Ohne Lebenslauf möglich', 'Antwort meist innerhalb von 24h', 'Kostenlos für Bewerber:innen'];

export function ApplicationForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      setFileError(null);
      const next: File[] = [...files];
      for (const f of Array.from(incoming)) {
        if (!ACCEPTED.includes(f.type)) {
          setFileError(`"${f.name}" hat ein nicht unterstütztes Format (nur PDF, JPG, PNG).`);
          continue;
        }
        if (f.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
          setFileError(`"${f.name}" ist zu groß (max. ${MAX_FILE_SIZE_MB} MB).`);
          continue;
        }
        if (next.length >= MAX_FILES) {
          setFileError(`Max. ${MAX_FILES} Dateien erlaubt.`);
          break;
        }
        if (next.some((x) => x.name === f.name && x.size === f.size)) continue;
        next.push(f);
      }
      setFiles(next);
    },
    [files],
  );

  const removeFile = (name: string, size: number) => {
    setFiles(files.filter((f) => !(f.name === name && f.size === size)));
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const onSubmit = handleSubmit(async (data) => {
    setStatus('submitting');
    setErrorMsg(null);

    try {
      const fd = new FormData();
      fd.append('form-name', 'bewerbung');
      fd.append('vorname', data.vorname);
      fd.append('nachname', data.nachname);
      fd.append('adresse', data.adresse);
      fd.append('telefon', data.telefon);
      fd.append('email', data.email);
      fd.append('branche', data.branche);
      fd.append('bot-field', data.botField ?? '');
      for (const f of files) fd.append('dateien', f, f.name);

      const res = await fetch('/', {
        method: 'POST',
        body: fd,
      });

      if (!res.ok) throw new Error(`Submission fehlgeschlagen (${res.status})`);

      setStatus('success');
      reset();
      setFiles([]);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unbekannter Fehler');
    }
  });

  if (status === 'success') {
    return (
      <section id="bewerbung" className="bg-brand-navy">
        <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange">
            <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="heading-display mt-6 text-3xl sm:text-4xl">Bewerbung eingegangen!</h2>
          <p className="mt-4 text-lg text-white/85">
            Danke — wir melden uns in Kürze bei dir per Telefon oder E-Mail.
          </p>
          <div className="mt-8">
            <Button variant="orange" onClick={() => setStatus('idle')}>
              Weitere Bewerbung senden
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="bewerbung" className="bg-brand-navy scroll-mt-8">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">Jetzt bewerben</p>
            <h2 className="section-title mt-3 max-w-xl">
              Dein schneller Weg zum nächsten Einsatz.
            </h2>
            <p className="section-copy mt-4 max-w-xl">
              Kein komplizierter Bewerbungsprozess: Wir schauen uns jede Anfrage persönlich an und melden uns zeitnah mit passenden Optionen zurück.
            </p>

            <div className="mt-8 grid gap-3">
              {steps.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-brand-navy-light/35 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-orange text-white">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <div>
                    <div className="text-base font-extrabold tracking-tight text-white">{title}</div>
                    <p className="mt-1 text-sm leading-6 text-white/72">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-brand-orange/30 bg-brand-orange/10 p-5">
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Gut zu wissen</div>
                  <div className="text-lg font-bold tracking-tight">Du musst dich nicht perfekt vorbereiten.</div>
                </div>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {trustPoints.map((point) => (
                  <li key={point} className="text-sm font-medium text-white/82 sm:text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white/10 bg-brand-navy-light/60 p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.01em] text-white/70">
                Fülle das Formular aus und wir melden uns schnell telefonisch oder per E-Mail zurück.
              </p>
              <form
                name="bewerbung"
                method="POST"
                encType="multipart/form-data"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={onSubmit}
                noValidate
                className="mt-8 flex flex-col gap-5"
              >
                <input type="hidden" name="form-name" value="bewerbung" />
                <div className="hidden" aria-hidden>
                  <label>
                    Nicht ausfüllen: <input type="text" {...register('botField')} tabIndex={-1} />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FieldWrapper id="vorname" label="Vorname" error={errors.vorname?.message}>
                    <Input id="vorname" autoComplete="given-name" {...register('vorname')} />
                  </FieldWrapper>
                  <FieldWrapper id="nachname" label="Nachname" error={errors.nachname?.message}>
                    <Input id="nachname" autoComplete="family-name" {...register('nachname')} />
                  </FieldWrapper>
                </div>

                <FieldWrapper id="adresse" label="Adresse" error={errors.adresse?.message}>
                  <Input id="adresse" autoComplete="street-address" placeholder="Straße, PLZ, Ort" {...register('adresse')} />
                </FieldWrapper>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FieldWrapper id="telefon" label="Telefonnummer" error={errors.telefon?.message}>
                    <Input id="telefon" type="tel" autoComplete="tel" placeholder="+43 ..." {...register('telefon')} />
                  </FieldWrapper>
                  <FieldWrapper id="email" label="E-Mail" error={errors.email?.message}>
                    <Input id="email" type="email" autoComplete="email" {...register('email')} />
                  </FieldWrapper>
                </div>

                <FieldWrapper id="branche" label="In welcher Branche willst du arbeiten?" error={errors.branche?.message}>
                  <Controller
                    control={control}
                    name="branche"
                    render={({ field }) => (
                      <Select id="branche" value={field.value ?? ''} onChange={field.onChange} onBlur={field.onBlur}>
                        <option value="" disabled>
                          Bitte wählen …
                        </option>
                        <option value="Gastronomie">Gastronomie</option>
                        <option value="Reinigung">Reinigung</option>
                        <option value="Event">Event & Veranstaltung</option>
                        <option value="Security">Security</option>
                        <option value="Sonstiges">Sonstiges</option>
                      </Select>
                    )}
                  />
                </FieldWrapper>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-[0.01em] text-white/84">
                    Dateien (optional) - Lebenslauf, Ausweis, Zeugnisse
                  </label>

                  <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={onDrop}
                    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-6 py-8 text-center transition ${
                      dragging
                        ? 'border-brand-orange bg-brand-orange/10'
                        : 'border-white/25 bg-brand-navy-light/40 hover:border-white/50'
                    }`}
                  >
                    <Upload className="h-7 w-7 text-white/80" />
                    <span className="font-semibold">Dateien hochladen oder hierher ziehen</span>
                    <span className="text-sm text-white/60">
                      PDF, JPG, PNG - max. {MAX_FILES} Dateien, je {MAX_FILE_SIZE_MB} MB
                    </span>
                  </button>

                  <input
                    ref={inputRef}
                    type="file"
                    name="dateien"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                    className="hidden"
                    onChange={(e) => e.target.files && addFiles(e.target.files)}
                  />

                  {fileError && <span className="text-sm font-medium text-red-300">{fileError}</span>}

                  {files.length > 0 && (
                    <ul className="mt-2 flex flex-col gap-2">
                      {files.map((f) => (
                        <li
                          key={`${f.name}-${f.size}`}
                          className="flex items-center gap-3 rounded-xl bg-brand-navy-dark/70 px-3 py-2"
                        >
                          <FileText className="h-5 w-5 shrink-0 text-white/80" />
                          <span className="flex-1 truncate text-sm">{f.name}</span>
                          <span className="shrink-0 text-xs text-white/60">
                            {(f.size / 1024 / 1024).toFixed(1)} MB
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(f.name, f.size)}
                            className="rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
                            aria-label={`${f.name} entfernen`}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {status === 'error' && (
                  <div className="rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-200">
                    Ups - {errorMsg ?? 'etwas ist schiefgelaufen'}. Bitte erneut versuchen.
                  </div>
                )}

                <Button variant="orange" type="submit" fullWidth disabled={status === 'submitting'} className="mt-2">
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Wird gesendet ...
                    </>
                  ) : (
                    <>Bewerbung absenden</>
                  )}
                </Button>

                <p className="text-center text-xs text-white/60">
                  Mit dem Absenden stimmst du der Verarbeitung deiner Daten zur Bearbeitung der Bewerbung zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
