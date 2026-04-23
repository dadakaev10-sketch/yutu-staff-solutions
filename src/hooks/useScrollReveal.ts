import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  delay?: number;
}

/** Fade-in + slide-up a single element when it enters the viewport. */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const {
    y = 30,
    duration = 0.6,
    ease = 'power3.out',
    start = 'top 90%',
    delay = 0,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    gsap.set(el, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration, ease, delay });
      },
      once: true,
    });

    return () => trigger.kill();
  }, [y, duration, ease, start, delay]);

  return ref;
}

/** Fade-in + slide-up a list of elements with stagger. */
export function useScrollRevealList(options: ScrollRevealOptions = {}) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLElement | null>(null);
  const {
    y = 30,
    duration = 0.6,
    ease = 'power3.out',
    stagger = 0.12,
    start = 'top 90%',
  } = options;

  useEffect(() => {
    const items = refs.current.filter(Boolean) as HTMLElement[];
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current ?? items[0],
      start,
      onEnter: () => {
        gsap.to(items, { opacity: 1, y: 0, duration, ease, stagger });
      },
      once: true,
    });

    return () => trigger.kill();
  }, [y, duration, ease, stagger, start]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  };

  return { containerRef, setRef };
}
