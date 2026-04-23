import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
} from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'primary' | 'orange';
type ButtonSize = 'default' | 'lg' | 'sm';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  default:
    'bg-brand-orange text-white shadow-lg shadow-orange-500/20 hover:bg-brand-orange-dark',
  outline:
    'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50',
  ghost:
    'bg-transparent text-slate-800 hover:bg-slate-100 shadow-none',
  primary:
    'bg-white text-brand-navy shadow-lg shadow-black/20 hover:bg-white/90',
  orange:
    'bg-brand-orange text-white shadow-lg shadow-orange-500/20 hover:bg-brand-orange-dark',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-11 px-5 text-sm',
  lg: 'h-14 px-8 text-base',
  sm: 'h-9 px-4 text-sm',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 disabled:pointer-events-none disabled:opacity-50';

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    asChild = false,
    variant = 'default',
    size = 'default',
    fullWidth = false,
    className = '',
    children,
    ...rest
  },
  ref,
) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
    </button>
  );
});
