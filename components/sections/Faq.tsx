import { Container } from '@/components/shared/Container';

export const FAQ_ITEMS = [
  {
    q: 'How does the white-label partnership work?',
    a: 'I operate fully behind your brand. Communication, trackers, and reporting can use your templates and your client-facing language. To your clients, the entire experience looks like one team. To you, it looks like a senior execution partner who never adds to your workload.',
  },
  {
    q: 'How many clients can you handle at once?',
    a: 'Capacity is intentionally controlled. I take on a finite number of active execution slots at any time so quality and follow-through never slip. We discuss exact volume on the partner call based on your roster and target outcomes.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'Healthcare and clinical roles, technology and engineering, product and marketing, customer success and revenue functions, and executive search across the United States, United Kingdom, and Canada. Live trackers in the proof section show the actual mix.',
  },
  {
    q: 'How is progress reported?',
    a: 'Live trackers update daily and a written summary lands every Friday. Applications sent, replies received, interviews scheduled, offers in motion. Coaches and clients always have a single source of truth, so review calls become decision calls instead of status updates.',
  },
  {
    q: 'What does pricing look like?',
    a: 'Pricing is structured per active client slot, with options for retainer or hybrid models depending on your coaching business. The 30-minute partner call is the right place to share specifics, since the right structure depends on your client volume and seniority mix.',
  },
  {
    q: 'How is client confidentiality maintained?',
    a: 'Every engagement runs under written confidentiality. Client data sits in access-controlled documents, sharing is permission based, and trackers can be locked down to coach-only visibility on request. Privacy is a default, not a feature.',
  },
] as const;

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line bg-surface-alt"
    >
      <Container as="div" className="section-pad">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              Common Questions
            </p>
            <h2 id="faq-heading" className="mt-5 text-h1 font-semibold text-navy">
              The answers most coaches want before the first call.
            </h2>
            <p className="mt-6 text-body text-ink-muted">
              If something is not covered here, ask on the discovery call. Direct answers, no sales theatre.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-line rounded-card border border-line bg-surface">
              {FAQ_ITEMS.map((item) => (
                <li key={item.q}>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-body font-medium text-navy [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-h3 font-light text-navy-500 transition-transform duration-apple group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-body text-ink-muted">
                      {item.a}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
