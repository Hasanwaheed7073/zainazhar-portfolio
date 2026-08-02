'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * ResponsiveDetails — a <details> that server-renders OPEN so crawlers and
 * no-JS visitors see the content exactly once (no duplicate mobile/desktop
 * renders). After hydration it collapses on mobile viewports and stays
 * locked open on desktop (summary toggle disabled via lg:pointer-events-none
 * passed by the caller).
 */
export function ResponsiveDetails({
  summary,
  children,
  className,
}: {
  summary: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(min-width: 1024px)');
    // Collapse on mobile after hydration; keep open on desktop.
    if (!mq.matches) el.open = false;
    const onChange = () => {
      if (mq.matches) el.open = true;
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <details ref={ref} open className={className}>
      {summary}
      {children}
    </details>
  );
}
