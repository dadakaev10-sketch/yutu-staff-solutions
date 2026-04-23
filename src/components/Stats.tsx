const stats = [
  { value: '500+', label: 'Menschen bereits im Einsatz' },
  { value: '50+', label: 'Partner-Betriebe in der Region' },
  { value: '24h', label: 'Antwortzeit im Schnitt' },
  { value: '100%', label: 'Kostenlos für Bewerber:innen' },
];

export function Stats() {
  return (
    <section className="bg-brand-navy-dark">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(245,122,44,0.16),rgba(26,50,120,0.65))] p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Schnell. Persönlich. Regional.</p>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="font-display text-6xl text-white sm:text-7xl lg:text-8xl">
                  {stats[0].value}
                </div>
                <p className="mt-3 max-w-sm text-lg font-semibold text-white/88 sm:text-xl">
                  {stats[0].label}
                </p>
              </div>
              <p className="max-w-md text-white/72 sm:text-lg">
                Vom ersten Kontakt bis zum ersten Einsatz halten wir den Weg bewusst kurz und menschlich.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.slice(1).map((s) => (
              <li
                key={s.label}
                className="rounded-[1.75rem] border border-white/10 bg-brand-navy-light/40 px-5 py-6 sm:px-6"
              >
                <div className="font-display text-4xl text-brand-orange sm:text-5xl">{s.value}</div>
                <div className="mt-2 text-sm font-semibold tracking-[0.01em] text-white/78 sm:text-base">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
