import { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'orange';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-sans font-extrabold tracking-[0.01em] text-base sm:text-lg px-8 py-5 transition-transform duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-white text-brand-navy hover:bg-white/90 shadow-xl shadow-black/20',
  orange: 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-xl shadow-black/20',
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = 'primary', fullWidth, className = '', children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
});
