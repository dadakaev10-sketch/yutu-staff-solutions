import { useEffect, useState } from 'react';
import { ArrowRight, Building2, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const navItems = [
  { label: 'Branchen', href: '#branchen' },
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'Stimmen', href: '#stimmen' },
  { label: 'Einsatzbereiche', href: '#einsatzbereiche' },
  { label: 'Fuer Betriebe', href: '#partner' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled
          ? 'border-slate-200 bg-white/92 shadow-sm backdrop-blur-xl'
          : 'border-transparent bg-white/84 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="YuTu Staff Solutions Startseite">
          <img
            src="/ytlogo.png"
            alt="YuTu Logo"
            className="h-10 w-auto"
          />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-slate-950">YuTu</div>
            <div className="text-xs font-medium text-slate-500">Staff Solutions</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="rounded-full px-5 text-sm font-semibold">
            <a href="#partner">
              <Building2 className="mr-2 h-4 w-4" />
              Fuer Partnerbetriebe
            </a>
          </Button>

          <Button asChild className="rounded-full px-6 text-sm font-semibold">
            <a href="#bewerbung">
              Jetzt bewerben
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-label={open ? 'Menue schliessen' : 'Menue oeffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-brand-navy"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3">
              <Button asChild variant="outline" className="h-12 rounded-full text-sm font-semibold">
                <a href="#partner" onClick={closeMenu}>
                  Fuer Partnerbetriebe
                </a>
              </Button>

              <Button asChild className="h-12 rounded-full text-sm font-semibold">
                <a href="#bewerbung" onClick={closeMenu}>
                  Jetzt bewerben
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
