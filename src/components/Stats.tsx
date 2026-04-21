const stats = [
  { value: '500+', label: 'Vermittelte Mitarbeiter' },
  { value: '50+', label: 'Partner-Betriebe' },
  { value: '24h', label: 'Antwortzeit' },
  { value: '100%', label: 'Kostenlos für Bewerber' },
];

export function Stats() {
  return (
    <section className="bg-brand-navy-dark">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="rounded-3xl border border-white/10 bg-brand-navy-light/40 px-5 py-8 text-center"
            >
              <div className="font-display text-4xl text-brand-orange sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/80 sm:text-base">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
