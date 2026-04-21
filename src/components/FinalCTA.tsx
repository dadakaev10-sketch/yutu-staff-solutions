import { ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section className="bg-brand-navy-dark">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <p className="heading-display text-2xl sm:text-3xl lg:text-4xl">
          Du bist auf Jobsuche oder offen für neue Chancen?
          <br className="hidden sm:block" />
          Bewirb dich jetzt und sichere dir einen Vorsprung.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            fullWidth
            className="max-w-md"
            onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Jetzt bewerben
          </Button>
        </div>

        <div className="mt-8 flex justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange shadow-xl shadow-black/20">
            <ArrowDown className="h-6 w-6 text-white" strokeWidth={3} />
          </span>
        </div>
      </div>
    </section>
  );
}
