import Link from 'next/link';
import { Container } from '@/components/shared/Container';

const CALENDAR_URL = 'https://calendar.app.google/MQvjkqsFfvneTyi48';
const WHATSAPP_URL = 'https://wa.me/923087823424';
const EMAIL = 'zeecareers07@gmail.com';

export function JobSeekerCta() {
  return (
    <section
      id="js-contact"
      aria-labelledby="js-cta-heading"
      className="border-t border-line bg-surface-alt"
    >
      <Container as="div" className="section-pad">
        <div className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            Next step
          </p>
          <h2 id="js-cta-heading" className="mt-5 text-h1 font-semibold text-navy">
            Book a free 30-minute audit call.
          </h2>
          <p className="mt-6 text-lead text-ink-muted">
            We review your current search, identify the bottleneck, and decide together whether a managed search is the right fit. No pressure, no pitch.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-card border border-navy bg-navy p-8 text-surface transition-opacity duration-apple hover:opacity-90"
          >
            <p className="text-small font-medium uppercase tracking-[0.14em] text-navy-300">
              Recommended
            </p>
            <p className="mt-3 text-h3 font-semibold">Book a free audit</p>
            <p className="mt-2 text-body text-navy-100">Pick a slot on Google Calendar.</p>
            <p className="mt-6 inline-flex items-center gap-2 text-small font-medium">
              Open calendar
              <span aria-hidden="true">→</span>
            </p>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-card border border-line bg-surface p-8 transition-opacity duration-apple hover:opacity-80"
          >
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              WhatsApp
            </p>
            <p className="mt-3 text-h3 font-semibold text-navy">+92 308 7823424</p>
            <p className="mt-2 text-body text-ink-muted">Fastest response, any time zone.</p>
            <p className="mt-6 inline-flex items-center gap-2 text-small font-medium text-navy">
              Message
              <span aria-hidden="true">→</span>
            </p>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-card border border-line bg-surface p-8 transition-opacity duration-apple hover:opacity-80"
          >
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              Email
            </p>
            <p className="mt-3 text-h3 font-semibold text-navy break-all">{EMAIL}</p>
            <p className="mt-2 text-body text-ink-muted">Reply within one working day.</p>
            <p className="mt-6 inline-flex items-center gap-2 text-small font-medium text-navy">
              Send
              <span aria-hidden="true">→</span>
            </p>
          </a>
        </div>

        <p className="mt-12 max-w-prose-wide text-small text-ink-muted">
          Are you a career coach instead? <Link href="/" className="text-navy underline-offset-4 hover:underline">See the partnership page →</Link>
        </p>
      </Container>
    </section>
  );
}
