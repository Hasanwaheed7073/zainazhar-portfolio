import Link from 'next/link';
import { Container } from '@/components/shared/Container';

export function JobSeekerHero() {
  return (
    <section
      aria-labelledby="js-hero-heading"
      className="bg-surface"
    >
      <Container as="div" className="section-pad">
        <div className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            For Job Seekers
          </p>
          <h1
            id="js-hero-heading"
            className="mt-5 text-display font-semibold text-navy"
          >
            Stop applying. Start getting interviews.
          </h1>
          <p className="mt-6 text-lead text-ink-muted">
            If you are sending dozens of applications a week and getting silence in return, the problem is rarely your experience. It is the system. I run that system for you, end to end, while you focus on prep and decisions.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#js-contact" className="btn-primary">
              Book a free audit call
            </Link>
            <Link href="/#proof" className="btn-secondary">
              See live campaigns
            </Link>
          </div>
          <p className="mt-8 text-small text-ink-soft">
            Working with mid-level to executive professionals across the United States, United Kingdom, and Canada.
          </p>
        </div>
      </Container>
    </section>
  );
}
