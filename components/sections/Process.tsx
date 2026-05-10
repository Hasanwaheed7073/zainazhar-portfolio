import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Discovery call',
    timeframe: 'Week 0',
    body: 'We align on your coaching model, your client profile, and the outcomes you measure success by. No pitch. Just clarity.',
  },
  {
    n: '02',
    title: 'Onboarding and integration',
    timeframe: 'Week 1',
    body: 'I integrate as a white-label execution partner. Your clients see one team. Tools, templates, and reporting align with how you already work.',
  },
  {
    n: '03',
    title: 'Daily execution',
    timeframe: 'Week 2 onward',
    body: 'Applications, recruiter outreach, and follow-ups run every working day. Pipeline stays full while your clients focus on prep and decisions.',
  },
  {
    n: '04',
    title: 'Weekly reporting',
    timeframe: 'Every Friday',
    body: 'Live trackers and a weekly summary show applications sent, replies received, interviews scheduled, and outcomes closed. Real metrics, not feelings.',
  },
] as const;

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-t border-line bg-surface-alt"
    >
      <Container as="div" className="section-pad">
        <Reveal className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            How the Partnership Works
          </p>
          <h2 id="process-heading" className="mt-5 text-h1 font-semibold text-navy">
            Four steps from first call to a working pipeline.
          </h2>
          <p className="mt-6 text-lead text-ink-muted">
            The partnership is intentionally simple. Discovery, integration, daily execution, weekly reporting. Repeat.
          </p>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="relative lg:col-span-6"
            >
              {/* Timeline rail (desktop only, full column) */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-2 hidden h-3 w-3 rounded-full bg-navy lg:block"
              />
              <div className="lg:pl-8">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <p className="text-small font-mono font-medium text-navy-500">{step.n}</p>
                  <p className="text-small font-medium uppercase tracking-[0.12em] text-ink-soft">
                    {step.timeframe}
                  </p>
                </div>
                <p className="mt-5 text-h3 font-semibold text-navy">{step.title}</p>
                <p className="mt-3 text-body text-ink-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Closing CTA strip */}
        <div className="mt-20 flex flex-col items-start justify-between gap-5 rounded-card border border-line bg-surface p-6 md:flex-row md:items-center md:p-10">
          <div className="max-w-prose-tight">
            <p className="text-h3 font-semibold text-navy">Ready to integrate execution into your coaching?</p>
            <p className="mt-2 text-body text-ink-muted">A 30-minute call is enough to know if the fit is right.</p>
          </div>
          <Link href="#contact" className="btn-primary">
            Book a Partner Call
          </Link>
        </div>
      </Container>
    </section>
  );
}
