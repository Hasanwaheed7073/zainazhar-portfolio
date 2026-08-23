import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { AGENT_RESOURCES, BUSINESS } from '@/lib/agent';
import { TOOLS, LATEST_PROTOCOL_VERSION } from '@/lib/mcp';
import { SITE_URL, BUSINESS_ID } from '@/lib/schema';

const url = `${SITE_URL}/developers`;

// The brand name is in the title, the H1, and every section heading on purpose:
// name-based discovery ("Zain Azhar API", "Zain Azhar MCP") only works if the
// name and the resource type appear together in indexable text.
export const metadata: Metadata = {
  title: 'Zain Azhar Developer & Agent Resources — MCP Server, llms.txt, API',
  description:
    'Developer and AI agent resources for Zain Azhar reverse recruiting: MCP server endpoint, llms.txt, markdown content negotiation, JSON-LD structured data, and sitemap. No authentication required.',
  keywords: [
    'Zain Azhar MCP server',
    'Zain Azhar API',
    'Zain Azhar llms.txt',
    'Zain Azhar developer resources',
    'reverse recruiting MCP server',
    'reverse recruiting agent integration',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Zain Azhar Developer & Agent Resources',
    description:
      'MCP server, llms.txt, markdown content negotiation, and structured data for Zain Azhar reverse recruiting.',
    url,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zain Azhar Developer & Agent Resources',
    description: 'MCP server, llms.txt, markdown content negotiation, and structured data.',
  },
};

const apiJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebAPI',
  '@id': `${url}#mcp`,
  name: 'Zain Azhar Reverse Recruiting MCP Server',
  description:
    'Model Context Protocol server exposing Zain Azhar reverse recruiting services, specialties, guides, contact details, and fit criteria as read-only tools over Streamable HTTP.',
  url,
  documentation: url,
  provider: { '@id': BUSINESS_ID },
  termsOfService: `${SITE_URL}/privacy`,
  endpointUrl: `${SITE_URL}/api/mcp`,
  endpointDescription: `${SITE_URL}/.well-known/mcp`,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Developer & Agent Resources', item: url },
  ],
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-card border border-line bg-surface-alt p-5">
      <code className="font-mono text-small text-ink">{children}</code>
    </pre>
  );
}

export default function DevelopersPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(apiJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-surface">
        <Container as="div" className="section-pad">
          <div className="max-w-prose-wide">
            <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
              For developers and AI agents
            </p>
            <h1 className="mt-5 text-display font-semibold text-navy">
              Zain Azhar developer &amp; agent resources
            </h1>
            <p className="mt-6 text-lead text-ink-muted">
              Machine-readable entry points for anything integrating with Zain Azhar reverse
              recruiting. There is no public REST API and no customer data endpoint — this is a
              services business, not a SaaS product. The MCP server is the supported programmatic
              interface, and everything it exposes is already public on this site.
            </p>

            <h2 className="mt-16 text-h2 font-semibold text-navy">Zain Azhar resource index</h2>
            <ul className="mt-6 space-y-3">
              {AGENT_RESOURCES.map((resource) => (
                <li
                  key={resource.name}
                  className="rounded-btn border border-line bg-surface px-5 py-4"
                >
                  <a
                    href={resource.url}
                    className="font-mono text-small font-medium text-navy underline underline-offset-4 hover:opacity-80 transition-opacity duration-apple"
                  >
                    {resource.name}
                  </a>
                  <p className="mt-1 text-small text-ink-muted">{resource.description}</p>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 text-h2 font-semibold text-navy">Zain Azhar MCP server</h2>
            <p className="mt-4 text-body text-ink-muted">
              Model Context Protocol server using the Streamable HTTP transport (JSON-RPC 2.0 over
              HTTP POST), protocol version {LATEST_PROTOCOL_VERSION}. No authentication. No rate
              limit beyond standard hosting protections. Discovery card at{' '}
              <code className="font-mono text-small">/.well-known/mcp</code>.
            </p>
            <CodeBlock>{`curl -X POST ${SITE_URL}/api/mcp \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json, text/event-stream" \\
  -H "MCP-Protocol-Version: ${LATEST_PROTOCOL_VERSION}" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'`}</CodeBlock>

            <h3 className="mt-10 text-h3 font-semibold text-navy">Tools</h3>
            <ul className="mt-4 space-y-3">
              {TOOLS.map((tool) => (
                <li key={tool.name} className="text-body text-ink-muted">
                  <code className="font-mono text-small font-medium text-navy">{tool.name}</code>
                  <span className="ml-2">— {tool.description}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 text-h2 font-semibold text-navy">Markdown content negotiation</h2>
            <p className="mt-4 text-body text-ink-muted">
              Every page URL honours{' '}
              <code className="font-mono text-small">Accept: text/markdown</code> and returns{' '}
              <code className="font-mono text-small">text/markdown; charset=utf-8</code> with{' '}
              <code className="font-mono text-small">Vary: Accept</code>, following the
              acceptmarkdown.com convention. Quality values are honoured, and a request that accepts
              neither HTML nor markdown gets a 406.
            </p>
            <CodeBlock>{`curl -H "Accept: text/markdown" ${SITE_URL}/job-seekers`}</CodeBlock>

            <h2 className="mt-16 text-h2 font-semibold text-navy">Structured data</h2>
            <p className="mt-4 text-body text-ink-muted">
              Pages carry JSON-LD covering Person, ProfessionalService, Service, WebSite, FAQPage,
              Article, and BreadcrumbList, cross-linked by stable{' '}
              <code className="font-mono text-small">@id</code> values rooted at{' '}
              <code className="font-mono text-small">{SITE_URL}/#zain-azhar</code> and{' '}
              <code className="font-mono text-small">{SITE_URL}/#business</code>.
            </p>

            <h2 className="mt-16 text-h2 font-semibold text-navy">Questions</h2>
            <p className="mt-4 text-body text-ink-muted">
              Email{' '}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-navy underline underline-offset-4 hover:opacity-80 transition-opacity duration-apple"
              >
                {BUSINESS.email}
              </a>
              . If you are building an agent that routes candidates or coaches to services, call the{' '}
              <code className="font-mono text-small">check_fit</code> tool first — it states the
              cases where this service is the wrong recommendation.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
