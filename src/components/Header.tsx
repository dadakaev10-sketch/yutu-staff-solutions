import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

const links = [
  { href: '#branchen', label: 'Branchen' },
  { href: '#vorteile', label: 'Vorteile' },
  { href: '#stimmen', label: 'Stimmen' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? 'bg-brand-navy-dark/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button onClick={() => go('#top')} aria-label="Zum Seitenanfang" className="shrink-0">
          <Logo />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="font-display text-sm uppercase tracking-wide text-white/80 transition hover:text-white"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('#bewerbung')}
            className="inline-flex items-center gap-2 rounded-pill bg-brand-orange px-5 py-2.5 font-display text-sm uppercase tracking-wide text-white shadow-lg shadow-black/20 transition hover:bg-brand-orange-dark"
          >
            Jetzt bewerben
            <ArrowRight className="h-4 w-4" />
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 lg:hidden"
          aria-label="Menü"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-navy-dark lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="rounded-xl px-3 py-3 text-left font-display text-base uppercase tracking-wide text-white/90 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go('#bewerbung')}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-pill bg-brand-orange px-5 py-3 font-display text-base uppercase tracking-wide text-white"
            >
              Jetzt bewerben
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
