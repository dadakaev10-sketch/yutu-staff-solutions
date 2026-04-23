import React from 'react';
import { Globe, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type InfoType = 'website' | 'phone' | 'address';

function InfoIcon({ type }: { type: InfoType }) {
  const iconClassName = 'h-5 w-5 text-brand-orange';

  const icons = {
    website: <Globe className={iconClassName} strokeWidth={2.2} />,
    phone: <Phone className={iconClassName} strokeWidth={2.2} />,
    address: <MapPin className={iconClassName} strokeWidth={2.2} />,
  };

  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
}

const mobileTrustItems = ['Ohne Lebenslauf', 'Schnelle Rückmeldung', 'Jobs in deiner Region'];

interface HeroSectionProps {
  id?: string;
  className?: string;
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(function HeroSection(
  { id, className, slogan, title, subtitle, callToAction, backgroundImage, contactInfo },
  ref,
) {
  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn(
        'relative overflow-hidden bg-brand-navy text-white',
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-orange/18 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-24 h-48 w-48 rounded-full bg-white/8 blur-3xl" />
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,122,44,0.18),transparent_34%),linear-gradient(180deg,rgba(15,31,79,0.18),rgba(15,31,79,0.72)_45%,rgba(15,31,79,0.94))] md:hidden" />

      <div className="mx-auto flex min-h-[min(92vh,860px)] max-w-7xl flex-col md:flex-row">
        <div className="relative z-10 flex w-full flex-col justify-between px-5 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28 md:w-[55%] md:pr-10 md:pt-10 lg:px-0 lg:pb-16 lg:pl-8 lg:pt-14">
          <div>
            <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-black/10 p-5 backdrop-blur-[2px] sm:p-6 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-0">
              {slogan && (
                <motion.p
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange sm:text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
                >
                  {slogan}
                </motion.p>
              )}
              <motion.h1
                className="mt-4 max-w-[10ch] text-[clamp(3rem,11vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-white sm:max-w-xl lg:text-7xl"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                {title}
              </motion.h1>
              <motion.div
                className="my-6 h-1 w-20 rounded-full bg-brand-orange"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.35 }}
                style={{ originX: 0 }}
              />
              <motion.p
                className="max-w-[32rem] text-base leading-7 text-white/82 sm:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
              <motion.div
                className="mt-6 flex flex-wrap gap-2 md:hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.35 }}
              >
                {mobileTrustItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[0.01em] text-white/88 backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
              <motion.a
                href={callToAction.href}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-orange px-7 py-4 text-base font-extrabold tracking-[0.01em] text-white shadow-[0_20px_50px_rgba(245,122,44,0.28)] transition hover:bg-brand-orange-dark hover:shadow-[0_22px_60px_rgba(245,122,44,0.36)]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
              >
                {callToAction.text}
              </motion.a>
            </div>
          </div>

          <motion.footer
            className="mt-12 hidden w-full md:block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm text-white/70 backdrop-blur sm:grid-cols-3">
              <div className="flex items-center">
                <InfoIcon type="website" />
                <span>{contactInfo.website}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="phone" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <InfoIcon type="address" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.footer>
        </div>

        <motion.div
          className="relative hidden min-h-[360px] w-full md:block md:w-[45%]"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,122,44,0.14),transparent_28%),linear-gradient(180deg,rgba(15,31,79,0.08),rgba(15,31,79,0.52))]" />
          <div className="absolute bottom-6 left-5 right-5 rounded-[1.75rem] border border-white/15 bg-brand-navy-dark/80 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:left-8 sm:right-8">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
              Jetzt im Einsatz
            </div>
            <div className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-white">
              Flexible Jobs, persönlicher Kontakt, regionale Einsätze.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

HeroSection.displayName = 'HeroSection';

export { HeroSection };
