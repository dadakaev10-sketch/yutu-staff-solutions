import { type MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Branchen', hash: '#branchen' },
  { label: 'Vorteile', hash: '#vorteile' },
  { label: 'Einsatzbereiche', hash: '#einsatzbereiche' },
  { label: 'Für Betriebe', hash: '#partner' },
  { label: 'FAQ', hash: '#faq' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === '/') return;
    e.preventDefault();
    navigate('/' + hash);
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy">
              <img src="/ytlogo.png" alt="YuTu Logo" className="h-8 w-8" />
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight">YuTu</div>
              <div className="text-sm text-white/60">Staff Solutions</div>
            </div>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            Flexibler Personaldienstleister für Nebenjobs in Wien, Linz, Graz und Umgebung.
            Persönlich, regional, schnell und menschlich.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Navigation
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.hash}>
                <a
                  href={item.hash}
                  onClick={(e) => handleAnchor(e, item.hash)}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>YuTu Staff Solutions</li>
            <li>Wien, Linz, Graz und Umgebung</li>
            <li>
              <a href="tel:+436641485854" className="transition hover:text-white">
                +43 664 1485854
              </a>
            </li>
            <li>
              <a href="mailto:office@yutustaff.at" className="transition hover:text-white">
                office@yutustaff.at
              </a>
            </li>
            <li>
              <a href="https://yutustaff.at" className="transition hover:text-white">
                yutustaff.at
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; {year} YuTu Staff Solutions. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </Link>
            <Link to="/impressum" className="transition hover:text-white">
              Impressum
            </Link>
            <span className="text-white/30">|</span>
            <span>
              Entwickelt von{' '}
              <a
                href="https://www.dadakaev.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-orange transition hover:text-brand-orange/80"
              >
                DADAKAEV Labs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
