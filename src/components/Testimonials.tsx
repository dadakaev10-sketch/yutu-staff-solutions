import { Quote, Star } from 'lucide-react';

const voices = [
  {
    name: 'Lara M.',
    role: 'Servicekraft, Wien',
    text: 'Super schnelle Rückmeldung — innerhalb eines Tages hatte ich meinen ersten Einsatz. Flexible Schichten neben dem Studium sind Gold wert.',
  },
  {
    name: 'Daniel K.',
    role: 'Eventhelfer, Linz',
    text: 'Ohne langen Lebenslauf gleich losgelegt. Faire Bezahlung und die Koordination läuft super persönlich ab.',
  },
  {
    name: 'Yasmin S.',
    role: 'Reinigungskraft, Graz',
    text: 'Ich kann meine Stunden rund um Familie und Kinder selbst wählen. Team ist top — fühle mich wirklich geschätzt.',
  },
];

export function Testimonials() {
  return (
    <section id="stimmen" className="bg-brand-navy scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Stimmen aus dem Team</p>
          <h2 className="section-title mt-3">
            Echte Menschen. Echte Jobs.
          </h2>
          <p className="section-copy mt-4">
            Das sagen unsere Mitarbeiter:innen über ihre Arbeit mit YuTu.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {voices.map((v) => (
            <li
              key={v.name}
              className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-brand-navy-light/40 p-6 sm:p-7"
            >
              <Quote className="h-8 w-8 text-brand-orange" />
              <p className="text-base leading-relaxed text-white/90">{v.text}</p>
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="text-base font-extrabold tracking-tight text-white">{v.name}</div>
                  <div className="text-xs text-white/60">{v.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
