import { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';

const popular = [
  'Kellner:in',
  'Reinigungskraft',
  'Security',
  'Eventhelfer:in',
  'Küchenhilfe',
  'Servicekraft',
  'Lagerhelfer:in',
  'Promoter:in',
];

export function JobSearch() {
  const [job, setJob] = useState('');
  const [ort, setOrt] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = document.getElementById('bewerbung');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  const pick = (q: string) => {
    setJob(q);
    document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mt-10">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-brand-navy-light/60 p-3 shadow-xl shadow-black/20 sm:flex-row sm:items-stretch sm:gap-2"
      >
        <div className="flex flex-1 items-center gap-3 rounded-2xl bg-brand-navy-dark/60 px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-white/70" />
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="Job oder Tätigkeit"
            className="w-full bg-transparent text-base text-white placeholder-white/50 focus:outline-none"
          />
        </div>

        <div className="flex flex-1 items-center gap-3 rounded-2xl bg-brand-navy-dark/60 px-4 py-3">
          <span className="font-display text-xs uppercase tracking-wide text-white/60">PLZ</span>
          <input
            type="text"
            value={ort}
            onChange={(e) => setOrt(e.target.value)}
            placeholder="Ort oder Postleitzahl"
            className="w-full bg-transparent text-base text-white placeholder-white/50 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-orange px-6 py-4 font-display text-base uppercase tracking-wide text-white shadow-lg shadow-black/20 transition hover:bg-brand-orange-dark sm:px-8"
        >
          <Search className="h-5 w-5" />
          Jobs finden
        </button>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="font-display text-xs uppercase tracking-wide text-white/60">Beliebt:</span>
        {popular.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => pick(p)}
            className="rounded-pill border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85 transition hover:border-brand-orange hover:text-white"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
