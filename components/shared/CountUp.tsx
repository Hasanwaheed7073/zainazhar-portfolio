'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CountUp — animates a number from 0 to target when scrolled into view.
 * Apple-style: short, ease-out, 900ms. Runs ONCE.
 * Respects prefers-reduced-motion (renders final value instantly).
 */
export function CountUp({
  end,
  suffix = '',
  duration = 900,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Start with the final value for SSR so crawlers see the real number, not "0+"
  const [value, setValue] = useState(end);
  const [done, setDone] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // After hydration, reset to 0 so the animation can run client-side
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      setDone(true);
      return;
    }
    setValue(0);
    setHydrated(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!hydrated) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done) {
          const start = performance.now();
          let raf = 0;
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(end * eased));
            if (progress < 1) {
              raf = requestAnimationFrame(tick);
            } else {
              setDone(true);
              observer.disconnect();
            }
          };
          raf = requestAnimationFrame(tick);
          return () => cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, done, hydrated]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
