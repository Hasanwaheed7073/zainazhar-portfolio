import { Container } from '@/components/shared/Container';

type TrackerLink = { label: string; href: string };

const MASTER_DOCS: TrackerLink[] = [
  {
    label: 'Client Interviews',
    href: 'https://docs.google.com/document/d/1i6Q7fqcNTwhhu-uAzx5BTS7oYFUU5lrpQv5sxRFWB24/edit?usp=sharing',
  },
  {
    label: 'Offer Letters',
    href: 'https://docs.google.com/document/d/14Nw0-UYMjoB1ZngbL32L3BX14dgEQeeTsQts78S3lf0/edit',
  },
];

const GENERAL_ROLES: TrackerLink[] = [
  { label: 'Account Executive / Customer Success Manager', href: 'https://docs.google.com/spreadsheets/d/1kVz8R7k9o51C4NpQ3BAMO_SqWcstvate/edit' },
  { label: 'Account Executive / Customer Success Manager (Campaign 2)', href: 'https://docs.google.com/spreadsheets/d/1wWfiL5F7PJleGVZKDr5sIjvoU0VqLRZc/edit' },
  { label: 'Content Manager / Production Media', href: 'https://docs.google.com/spreadsheets/d/118XeUIw-1JhJf9SWFBHHj58-zcQ6Z6Xe/edit' },
  { label: 'Project Manager / Program Manager', href: 'https://docs.google.com/spreadsheets/d/1QeHBDb-do-i58LliRyakwIwGkVm89pIE/edit' },
  { label: 'Project / Program Director', href: 'https://docs.google.com/spreadsheets/d/1oiZNm6kWIrV_zoPoFkSoaltqbj68Fqdb/edit' },
  { label: 'Product / Growth / Lifecycle Marketing', href: 'https://docs.google.com/spreadsheets/d/1K7LfyJ4N-sF9YrWhN3sFukG1GcNCD8cf/edit' },
  { label: 'Product / Growth / Lifecycle Marketing (Campaign 2)', href: 'https://docs.google.com/spreadsheets/d/1T-TVzQm5zm6irdeAI7u7Sqpv4_3qJRlS/edit' },
  { label: 'Product Management', href: 'https://docs.google.com/spreadsheets/d/1NWpfT7ql2di8gUTBn_Bh2tT_CXxepO2y/edit' },
  { label: 'Content / Growth / SDR / BDR Marketing', href: 'https://docs.google.com/spreadsheets/d/1oEakdwg5qLQZtel-AhV6nwNlnlLRLqYk/edit' },
  { label: 'VP Analytics (Data / Business / AI)', href: 'https://docs.google.com/spreadsheets/d/1V6Q1XOPJRVmo_ki2l9NSQ-ffrc_teT5_/edit' },
  { label: 'VP Analytics (Campaign 2)', href: 'https://docs.google.com/spreadsheets/d/1HAd6pIWebzSpu3dXHXlbQxxKbmmBMGcP/edit' },
  { label: 'Software / Backend / Fullstack Engineer', href: 'https://docs.google.com/spreadsheets/d/1DO2akEPmQDb_RxZJQYRyr5Js0B8M8usI/edit' },
];

const HEALTHCARE: TrackerLink[] = [
  { label: 'Regulatory Affairs Associate / CRA', href: 'https://docs.google.com/spreadsheets/d/14sYLJJHSQFXmT03vozUanctwYT31aV-DtkJCJzRz_0U/edit' },
  { label: 'Clinical Trial Associate / Clinical Research PM', href: 'https://docs.google.com/spreadsheets/d/1WOF-bF2rSD1utlVmH3O7kgUGMRkCfCTr9mT-4Z3NfnE/edit' },
  { label: 'Data Program Associate / Drug Safety / Regulatory Compliance', href: 'https://docs.google.com/spreadsheets/d/1pAxpGr2mGlDg6L8TqxTMXyan8VnNXMxjJ5gyv_S1ihU/edit' },
  { label: 'Medical Writer / CRA', href: 'https://docs.google.com/spreadsheets/d/1h_-YqcX8iIIZPgJg-VZdVv0EPy4h6s4kR1icflNybKc/edit' },
  { label: 'Senior Medical Writer / Medical Science Liaison', href: 'https://docs.google.com/spreadsheets/d/1a-41P8uoO1uigCvsqnwdMef10FqSiaX3vQik2swlpcU/edit' },
  { label: 'Senior Clinical Trial Associate', href: 'https://docs.google.com/spreadsheets/d/1mMa1ZxA0AtXNSvHVKlT-KZmc9WyOt8mhYOlGNZ1X1C8/edit' },
  { label: 'Registered Nurse / RN / Clinical Appeal RN', href: 'https://docs.google.com/spreadsheets/d/17R7Kypmk1y0s2LucTDQKmhlr2QGD2MnWVlluZvlZJ8c/edit' },
];

function LinkRow({ item }: { item: TrackerLink }) {
  return (
    <li>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 rounded-btn border border-line bg-surface px-5 py-4 transition-opacity duration-apple hover:opacity-80"
      >
        <span className="text-body text-ink">{item.label}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-small font-medium text-navy-500 group-hover:text-navy"
        >
          Open →
        </span>
      </a>
    </li>
  );
}

function CategoryBlock({
  title,
  items,
  defaultOpen = false,
}: {
  title: string;
  items: TrackerLink[];
  defaultOpen?: boolean;
}) {
  return (
    <div className="mt-12 lg:mt-16">
      {/* Mobile: collapsed by default via <details>. Desktop (lg+): always open via lg:open and lg-only summary hiding. */}
      <details className="group lg:open" open={defaultOpen}>
        <summary className="flex cursor-pointer items-end justify-between gap-6 border-b border-line pb-4 lg:cursor-default lg:list-none [&::-webkit-details-marker]:hidden">
          <h3 className="text-h3 font-semibold text-navy">{title}</h3>
          <div className="flex items-center gap-3">
            <p className="text-small text-ink-muted">{items.length} live trackers</p>
            <span
              aria-hidden="true"
              className="text-h3 font-light text-navy-500 transition-transform duration-apple group-open:rotate-45 lg:hidden"
            >
              +
            </span>
          </div>
        </summary>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {items.map((item) => (
            <LinkRow key={item.href} item={item} />
          ))}
        </ul>
      </details>
    </div>
  );
}

export function Proof() {
  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="bg-surface"
    >
      <Container as="div" className="section-pad">
        {/* Header */}
        <div className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            Live Proof
          </p>
          <h2 id="proof-heading" className="mt-5 text-h1 font-semibold text-navy">
            Real campaigns. Real interviews. Real offers.
          </h2>
          <p className="mt-6 text-lead text-ink-muted">
            Every tracker below is a live document from an active or completed engagement. Click any of them to see the work, the volume, and the outcomes.
          </p>
        </div>

        {/* Master docs — always visible */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16">
          {MASTER_DOCS.map((doc) => (
            <a
              key={doc.label}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base group flex flex-col justify-between transition-opacity duration-apple hover:opacity-90"
            >
              <div>
                <p className="text-small font-medium uppercase tracking-[0.14em] text-navy-500">
                  Master Document
                </p>
                <p className="mt-3 text-h2 font-semibold text-navy">{doc.label}</p>
                <p className="mt-3 text-body text-ink-muted">
                  {doc.label === 'Client Interviews'
                    ? 'A running record of interviews scheduled and completed across active client campaigns.'
                    : 'A consolidated record of offer letters and accepted positions across client engagements.'}
                </p>
              </div>
              <p className="mt-8 inline-flex items-center gap-2 text-small font-medium text-navy">
                Open document
                <span aria-hidden="true">→</span>
              </p>
            </a>
          ))}
        </div>

        {/* General roles — collapsed on mobile, open on desktop */}
        <CategoryBlock title="General Role Campaigns" items={GENERAL_ROLES} />

        {/* Healthcare specialty — collapsed on mobile, open on desktop */}
        <CategoryBlock title="Healthcare Specialty Campaigns" items={HEALTHCARE} />

        {/* Closing note */}
        <p className="mt-12 max-w-prose-wide text-small text-ink-muted">
          Trackers are shared as transparent proof of active execution. Names and contact details have been managed under client agreements.
        </p>
      </Container>
    </section>
  );
}
