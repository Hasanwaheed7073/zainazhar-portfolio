import Link from 'next/link';
import { Container } from './Container';

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#proof', label: 'Live Proof' },
  { href: '/#process', label: 'Process' },
  { href: '/job-seekers', label: 'For Job Seekers' },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-surface/85 backdrop-blur-md">
      <Container as="div" className="flex h-14 md:h-16 items-center justify-between">
        <Link
          href="/"
          className="text-h3 font-semibold tracking-tight text-navy"
          aria-label="Zain Azhar — Home"
        >
          Zain Azhar
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-small text-ink-muted hover:text-navy transition-opacity duration-apple"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary text-small">
            Book a Partner Call
          </Link>
        </nav>

        {/* Mobile menu toggle (CSS-only via :checked) */}
        <input id="nav-toggle" type="checkbox" className="peer hidden" aria-label="Toggle menu" />
        <label
          htmlFor="nav-toggle"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line cursor-pointer"
          aria-label="Open menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 4h14M2 9h14M2 14h14" stroke="#0A1F44" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </label>

        {/* Mobile menu panel */}
        <div className="absolute left-0 right-0 top-14 md:top-16 hidden peer-checked:block md:peer-checked:hidden border-b border-line bg-surface">
          <Container as="div" className="py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-body text-ink hover:text-navy transition-opacity duration-apple"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-primary w-full">
              Book a Partner Call
            </Link>
          </Container>
        </div>
      </Container>
    </header>
  );
}
