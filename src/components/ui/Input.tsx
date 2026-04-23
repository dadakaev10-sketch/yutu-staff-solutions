import { InputHTMLAttributes, forwardRef, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

type FieldWrapperProps = {
  label: string;
  error?: string;
  id: string;
  children: React.ReactNode;
};

export function FieldWrapper({ label, error, id, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold tracking-[0.01em] text-white/84">
        {label}
      </label>
      {children}
      {error && <span className="text-sm font-medium text-red-300">{error}</span>}
    </div>
  );
}

const fieldBase =
  'w-full rounded-2xl bg-brand-navy-light/80 border border-white/10 px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/30 transition';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className = '', ...rest }, ref) {
    return <input ref={ref} className={`${fieldBase} ${className}`} {...rest} />;
  },
);

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  function Select({ className = '', children, ...rest }, ref) {
    return (
      <select ref={ref} className={`${fieldBase} appearance-none pr-10 ${className}`} {...rest}>
        {children}
      </select>
    );
  },
);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className = '', ...rest }, ref) {
    return <textarea ref={ref} className={`${fieldBase} min-h-[120px] ${className}`} {...rest} />;
  },
);
