import {
  ComponentPropsWithoutRef,
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

type AccordionContextValue = {
  value: string | null;
  toggle: (nextValue: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

type AccordionProps = PropsWithChildren<{
  type?: 'single';
  collapsible?: boolean;
  className?: string;
}>;

type AccordionItemContextValue = {
  itemValue: string;
  open: boolean;
  toggle: () => void;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

export function Accordion({ children, collapsible = false, className }: AccordionProps) {
  const [value, setValue] = useState<string | null>(null);

  const contextValue = useMemo(
    () => ({
      value,
      toggle: (nextValue: string) => {
        setValue((current) => {
          if (current === nextValue) {
            return collapsible ? null : current;
          }

          return nextValue;
        });
      },
    }),
    [collapsible, value],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = PropsWithChildren<{
  value: string;
  className?: string;
}>;

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('AccordionItem must be used inside Accordion');
  }

  const open = context.value === value;

  return (
    <AccordionItemContext.Provider
      value={{
        itemValue: value,
        open,
        toggle: () => context.toggle(value),
      }}
    >
      <div className={className}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
};

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error('AccordionTrigger must be used inside AccordionItem');
  }

  return (
    <button
      type="button"
      aria-expanded={itemContext.open}
      onClick={itemContext.toggle}
      className={cn(
        'flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-brand-orange',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          'h-5 w-5 shrink-0 text-brand-orange transition-transform duration-200',
          itemContext.open && 'rotate-180',
        )}
      />
    </button>
  );
}

type AccordionContentProps = PropsWithChildren<{
  className?: string;
}>;

export function AccordionContent({ className, children }: AccordionContentProps) {
  const itemContext = useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error('AccordionContent must be used inside AccordionItem');
  }

  return (
    <div
      className={cn(
        'grid overflow-hidden transition-all duration-200',
        itemContext.open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
      )}
    >
      <div className="overflow-hidden">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}
