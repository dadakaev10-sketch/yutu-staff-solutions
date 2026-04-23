import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Lara M.',
    role: 'Servicekraft, Wien',
    image: '/images/testimonial-lara.jpg',
    quote:
      'Super schnelle Rueckmeldung - innerhalb eines Tages hatte ich meinen ersten Einsatz. Flexible Schichten neben dem Studium sind Gold wert.',
  },
  {
    name: 'Daniel K.',
    role: 'Eventhelfer, Linz',
    image: '/images/testimonial-daniel.jpg',
    quote:
      'Ohne langen Lebenslauf gleich losgelegt. Faire Bezahlung und die Koordination laeuft super persoenlich ab.',
  },
  {
    name: 'Yasmin S.',
    role: 'Reinigungskraft, Graz',
    image: '/images/testimonial-yasmin.jpg',
    quote:
      'Ich kann meine Stunden rund um Familie und Kinder selbst waehlen. Team ist top - fuehle mich wirklich geschaetzt.',
  },
];

export function Testimonials() {
  return (
    <section id="stimmen" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-brand-green">
            Stimmen aus dem Team
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Echte Menschen. Echte Jobs. Echte Erfahrungen.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Das sagen Menschen, die bereits mit YuTu gearbeitet haben - persoenlich betreut, regional vermittelt und
            flexibel im Einsatz.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-2xl object-cover" loading="lazy" />
                <div>
                  <div className="text-lg font-bold tracking-tight text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1 text-brand-orange">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <Quote className="mt-6 h-8 w-8 text-brand-green" />

              <p className="mt-4 flex-1 text-base leading-8 text-white/80">{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
