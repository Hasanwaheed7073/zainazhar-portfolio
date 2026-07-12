'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { NICHES } from '@/lib/content';

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#proof', label: 'Live Proof' },
  { href: '/#process', label: 'Process' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/job-seekers', label: 'For Job Seekers' },
] as const;

export function Nav() {
  const pathname = usePathname();
  const isJobSeekerPage = pathname.startsWith('/job-seekers');
  const ctaLabel = isJobSeekerPage ? 'Book a Free Audit' : 'Book a Partner Call';
  const ctaHref = isJobSeekerPage ? '#js-contact' : '/#contact';

  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSpecialtiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSpecialtiesOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setSpecialtiesOpen(false), 200);
  }

  // Close mobile menu on navigation
  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileSpecialtiesOpen(false);
  }

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

          {/* Specialties dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setSpecialtiesOpen((prev) => !prev)}
              className="text-small text-ink-muted hover:text-navy transition-opacity duration-apple inline-flex items-center gap-1"
              aria-expanded={specialtiesOpen}
              aria-haspopup="true"
              id="specialties-menu-button"
            >
              Specialties
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-150 ${specialtiesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              role="menu"
              aria-labelledby="specialties-menu-button"
              className={`absolute right-0 top-full mt-2 w-64 rounded-card border border-line bg-surface shadow-soft overflow-hidden transition-all duration-150 origin-top ${
                specialtiesOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="px-4 pt-3 pb-2">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  By Field
                </p>
              </div>
              {NICHES.map((niche) => (
                <Link
                  key={niche.slug}
                  href={`/reverse-recruiter/${niche.slug}`}
                  role="menuitem"
                  onClick={() => setSpecialtiesOpen(false)}
                  className="block px-4 py-2.5 text-small text-ink hover:bg-surface-alt hover:text-navy transition-colors duration-apple"
                >
                  {niche.h1.replace(/^Reverse recruiter for /, '')}
                </Link>
              ))}
              <div className="border-t border-line">
                <Link
                  href="/reverse-recruiter"
                  role="menuitem"
                  onClick={() => setSpecialtiesOpen(false)}
                  className="block px-4 py-2.5 text-small font-medium text-navy hover:bg-surface-alt transition-colors duration-apple"
                >
                  View all fields →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog link */}
          <Link
            href="/blog"
            className="text-small text-ink-muted hover:text-navy transition-opacity duration-apple"
          >
            Blog
          </Link>

          <Link href={ctaHref} className="btn-primary text-small">
            {ctaLabel}
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            if (mobileMenuOpen) setMobileSpecialtiesOpen(false);
          }}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="#0A1F44" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4h14M2 9h14M2 14h14" stroke="#0A1F44" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-14 md:hidden border-b border-line bg-surface shadow-soft">
            <Container as="div" className="py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMobileMenu}
                  className="text-body text-ink hover:text-navy transition-opacity duration-apple"
                >
                  {l.label}
                </Link>
              ))}

              {/* Mobile Specialties accordion */}
              <div>
                <button
                  onClick={() => setMobileSpecialtiesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between text-body text-ink hover:text-navy transition-opacity duration-apple"
                  aria-expanded={mobileSpecialtiesOpen}
                >
                  Specialties
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-150 ${mobileSpecialtiesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileSpecialtiesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {NICHES.map((niche) => (
                      <Link
                        key={niche.slug}
                        href={`/reverse-recruiter/${niche.slug}`}
                        onClick={closeMobileMenu}
                        className="text-small text-ink-muted hover:text-navy transition-opacity duration-apple"
                      >
                        {niche.h1.replace(/^Reverse recruiter for /, '')}
                      </Link>
                    ))}
                    <Link
                      href="/reverse-recruiter"
                      onClick={closeMobileMenu}
                      className="text-small font-medium text-navy hover:opacity-80 transition-opacity duration-apple"
                    >
                      View all fields →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Blog link */}
              <Link
                href="/blog"
                onClick={closeMobileMenu}
                className="text-body text-ink hover:text-navy transition-opacity duration-apple"
              >
                Blog
              </Link>

              <Link href={ctaHref} onClick={closeMobileMenu} className="btn-primary w-full">
                {ctaLabel}
              </Link>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
