export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 text-center text-sm text-white/60">
        &copy; {year} YuTu Staff Solutions — Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
