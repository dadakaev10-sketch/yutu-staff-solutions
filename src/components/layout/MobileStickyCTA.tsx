import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const SHOW_AFTER = 700;

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      setVisible(false);
      return;
    }

    const onScroll = () => {
      const past = window.scrollY > SHOW_AFTER;
      const formInView = isFormInView();
      setVisible(past && !formInView);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // Don't render on sub-pages at all.
  if (location.pathname !== '/') return null;

  const handleApply = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.querySelector('#bewerbung')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/#bewerbung');
    }
  };

  return (
    <div
      role="region"
      aria-label="Schnellzugriff – Bewerben oder anrufen"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-all duration-300 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="pointer-events-auto mx-auto max-w-md p-3">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-md">
          <a
            href="tel:+436641485854"
            aria-label="YuTu Staff Solutions anrufen"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-navy transition active:scale-95"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="#bewerbung"
            onClick={handleApply}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange px-5 text-sm font-semibold text-white shadow-md transition active:scale-95"
          >
            Jetzt bewerben
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function isFormInView(): boolean {
  const form = document.querySelector('#bewerbung');
  if (!form) return false;
  const rect = form.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  // Hide the sticky CTA when the application section is meaningfully on screen.
  return rect.top < viewportHeight * 0.65 && rect.bottom > viewportHeight * 0.2;
}
