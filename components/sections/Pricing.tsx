import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';

const MODELS = [
  {
    label: 'Monthly Retainer',
    description:
      'A fixed monthly fee for a set number of active client slots. Best for coaches with a steady client roster who want predictable costs and consistent execution.',
    fit: 'Coaches with 3+ active clients',
  },
  {
    label: 'Per-Client Slot',
    description:
      'Pay per active client search. Scales up and down with your roster. Good for coaches who ramp clients in cohorts or want to start with a single test slot.',
    fit: 'Coaches testing the partnership',
  },
  {
    label: 'Hybrid Engagement',
    description:
      'A lower base retainer combined with a per-client component. Balances commitment with flexibility when client volume fluctuates month to month.',
    fit: 'Growing coaching practices',
  },
] as const;

const TRUST_SIGNALS = [
  'No long-term lock-in — month-to-month by default',
  'Exact pricing scoped on the 30-minute partner call',
  'All plans include daily execution, outreach, follow-ups, and weekly reporting',
  'White-label delivery included at no extra cost',
] as const;

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-surface"
    >
      <Container as="div" className="section-pad">
        <Reveal className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            Engagement Models
          </p>
          <h2 id="pricing-heading" className="mt-5 text-h1 font-semibold text-navy">
            Transparent structure. No surprises.
          </h2>
          <p className="mt-6 text-lead text-ink-muted">
            Pricing is based on the number of active client slots and the engagement model that fits your coaching practice. Exact numbers are scoped on the partner call because the right structure depends on your client volume and seniority mix.
          </p>
        </Reveal>

        {/* Engagement model cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODELS.map((model) => (
            <div
              key={model.label}
              className="card-base flex flex-col justify-between"
            >
              <div>
                <p className="text-small font-medium uppercase tracking-[0.14em] text-navy-500">
                  {model.label}
                </p>
                <p className="mt-4 text-body text-ink-muted">
                  {model.description}
                </p>
              </div>
              <p className="mt-6 text-small font-medium text-navy">
                Best for: {model.fit}
              </p>
            </div>
          ))}
        </div>

        {/* Trust signals strip */}
        <div className="mt-12 rounded-card border border-line bg-surface-alt p-6 md:p-8">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {TRUST_SIGNALS.map((signal) => (
              <li
                key={signal}
                className="flex items-start gap-3 text-body text-ink-muted"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[0.625rem] text-surface" aria-hidden="true">
                  ✓
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-card border border-line bg-surface p-6 md:flex-row md:items-center md:p-10">
          <div className="max-w-prose-tight">
            <p className="text-h3 font-semibold text-navy">Want exact numbers for your practice?</p>
            <p className="mt-2 text-body text-ink-muted">
              The 30-minute partner call covers pricing, scope, and fit. No commitment required.
            </p>
          </div>
          <Link href="#contact" className="btn-primary shrink-0">
            Book a Partner Call
          </Link>
        </div>
      </Container>
    </section>
  );
}
