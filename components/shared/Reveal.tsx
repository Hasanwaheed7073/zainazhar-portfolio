'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Reveal — Apple-imperceptible scroll fade-up.
 * Wraps content. On scroll-into-view, fades opacity 0->1 and translates 8px up over 480ms.
 * Runs ONCE. Respects prefers-reduced-motion (handled in globals.css).
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Bail out if reduced motion preferred — show immediately.
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const t = setTimeout(() => setRevealed(true), delay);
            return () => clearTimeout(t);
          }
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-init ${revealed ? 'reveal-in' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
