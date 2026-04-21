export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy-dark border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 py-8 sm:px-8 text-center text-sm text-white/60">
        <div>&copy; {year} YuTu Staff Solutions — Alle Rechte vorbehalten.</div>
        <div>
          Website by{' '}
          <a
            href="https://www.dadakaev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display uppercase tracking-wide text-brand-orange transition hover:text-brand-orange/80"
          >
            DADAKAEV Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
