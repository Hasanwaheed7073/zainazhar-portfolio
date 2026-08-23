import { Container } from '@/components/shared/Container';
import { Reveal } from '@/components/shared/Reveal';
import { FAQ_ITEMS } from '@/lib/content';

export { FAQ_ITEMS };

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-line bg-surface-alt"
    >
      <Container as="div" className="section-pad">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              Common Questions
            </p>
            <h2 id="faq-heading" className="mt-5 text-h1 font-semibold text-navy">
              The answers most coaches want before the first call.
            </h2>
            <p className="mt-6 text-body text-ink-muted">
              If something is not covered here, ask on the discovery call. Direct answers, no sales theatre.
            </p>
          </Reveal>

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
