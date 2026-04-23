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
  { id, className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo },
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

      <div className="mx-auto flex min-h-[min(92vh,860px)] max-w-7xl flex-col md:flex-row">
        <div className="flex w-full flex-col justify-between px-5 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-10 md:w-[55%] md:pr-10 lg:px-0 lg:pb-16 lg:pl-8 lg:pt-14">
          <div>
            <motion.header
              className="mb-14"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            >
              {logo && (
                <div className="flex items-center gap-3">
                  <img src={logo.url} alt={logo.alt} className="h-11 w-auto shrink-0" />
                  <div className="leading-tight">
                    {logo.text && <p className="text-lg font-extrabold tracking-tight text-white">{logo.text}</p>}
                    {slogan && (
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </motion.header>

            <div className="max-w-2xl">
              <motion.h1
                className="max-w-xl text-5xl font-extrabold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl"
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
                className="max-w-md text-base leading-7 text-white/75 sm:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
              >
                {subtitle}
              </motion.p>
              <motion.a
                href={callToAction.href}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-orange px-7 py-4 text-base font-extrabold tracking-[0.01em] text-white transition hover:bg-brand-orange-dark"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
              >
                {callToAction.text}
              </motion.a>
            </div>
          </div>

          <motion.footer
            className="mt-12 w-full"
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
          className="relative min-h-[360px] w-full md:w-[45%]"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,79,0.14),rgba(15,31,79,0.55))]" />
          <div className="absolute bottom-6 left-5 right-5 rounded-[1.75rem] border border-white/15 bg-brand-navy-dark/80 p-5 backdrop-blur sm:left-8 sm:right-8">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
              Jetzt im Einsatz
            </div>
            <div className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-white">
              Flexible Jobs, persoenlicher Kontakt, regionale Einsaetze.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

HeroSection.displayName = 'HeroSection';

export { HeroSection };
