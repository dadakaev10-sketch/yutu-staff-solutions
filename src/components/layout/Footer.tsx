export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-lg font-extrabold text-white">
              Y
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight">YuTu</div>
              <div className="text-sm text-white/60">Staff Solutions</div>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            Flexibler Personaldienstleister fuer Nebenjobs in Wien, Linz, Graz und Umgebung.
            Persoenlich, regional, schnell und menschlich.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Navigation
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><a href="#branchen" className="transition hover:text-white">Branchen</a></li>
            <li><a href="#vorteile" className="transition hover:text-white">Vorteile</a></li>
            <li><a href="#stimmen" className="transition hover:text-white">Stimmen</a></li>
            <li><a href="#einsatzbereiche" className="transition hover:text-white">Einsatzbereiche</a></li>
            <li><a href="#partner" className="transition hover:text-white">Fuer Betriebe</a></li>
            <li><a href="#faq" className="transition hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>YuTu Staff Solutions</li>
            <li>Wien, Linz, Graz und Umgebung</li>
            <li><a href="tel:+436641485854" className="transition hover:text-white">+43 664 1485854</a></li>
            <li><a href="https://yutustaff.at" className="transition hover:text-white">yutustaff.at</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; {year} YuTu Staff Solutions. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">Datenschutz</a>
            <a href="#" className="transition hover:text-white">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
