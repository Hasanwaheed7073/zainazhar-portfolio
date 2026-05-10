import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-surface"
    >
      <Container as="div" className="section-pad">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <Reveal className="lg:col-span-7">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              Reverse Recruiting Partner
            </p>
            <h1
              id="hero-heading"
              className="mt-5 text-display font-semibold text-navy"
            >
              Reverse Recruiter for Career Coaches
            </h1>
            <p className="mt-6 max-w-prose-wide text-lead text-ink-muted">
              I run job search execution behind the scenes so your clients land more interviews and faster offers.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#contact" className="btn-primary">
                Book a Partner Call
              </Link>
              <Link href="#proof" className="btn-secondary">
                See Live Proof
              </Link>
            </div>
            <p className="mt-8 text-small text-ink-soft">
              Trusted across the United States, United Kingdom, and Canada.
            </p>
          </Reveal>

          {/* Right: headshot */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-card border border-line bg-navy-50">
              <Image
                src="/zain-headshot.jpg"
                alt="Zain Azhar, Reverse Recruiter for career coaches"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 80vw, 40vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
