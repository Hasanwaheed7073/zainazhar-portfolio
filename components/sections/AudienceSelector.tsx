import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';

export function AudienceSelector() {
  return (
    <section
      aria-label="Choose your path"
      className="border-t border-line bg-surface-alt"
    >
      <Container as="div" className="py-10 md:py-14">
        <Reveal>
          <p className="text-center text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            Which describes you?
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            {/* Career Coach path */}
            <Link
              href="#services"
              id="audience-coach"
              className="group relative rounded-card border-2 border-navy bg-surface p-7 md:p-8 transition-all duration-150 hover:shadow-soft"
            >
              <div>
                <p className="text-h3 font-semibold text-navy">I&apos;m a Career Coach</p>
                <p className="mt-2 text-body text-ink-muted">
                  Looking for a white-label execution partner to run job searches behind the scenes for your clients.
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-small font-medium text-navy group-hover:gap-2.5 transition-all duration-150">
                  Explore the partnership
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>

            {/* Job Seeker path */}
            <Link
              href="/job-seekers"
              id="audience-jobseeker"
              className="group relative rounded-card border-2 border-line bg-surface p-7 md:p-8 transition-all duration-150 hover:border-navy hover:shadow-soft"
            >
              <div>
                <p className="text-h3 font-semibold text-navy">I&apos;m a Job Seeker</p>
                <p className="mt-2 text-body text-ink-muted">
                  Want someone to run your job search for you — applications, outreach, follow-ups, and tracking.
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-small font-medium text-navy group-hover:gap-2.5 transition-all duration-150">
                  See the done-for-you search
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
