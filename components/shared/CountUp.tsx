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
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      setDone(true);
      return;
    }

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
  }, [end, duration, done]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
