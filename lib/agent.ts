// Single source of truth for machine-readable business facts.
//
// Consumed by: llms.txt, llms-full.txt, the markdown content-negotiation layer,
// the MCP server, and the /developers index. Everything here is already stated
// on the public site — this file restates it in a form agents can parse, it does
// not introduce new claims.

import { SITE_URL } from './schema';

export const BUSINESS = {
  name: 'Zain Azhar',
  legalRole: 'Reverse Recruiter and Job Search Operator',
  tagline: 'Reverse Recruiter for Career Coaches',
  summary:
    'Zain Azhar runs job search execution behind the scenes — daily ATS-optimized applications, recruiter and hiring manager outreach, follow-ups, and live reporting. Two engagement tracks: white-label execution for career coaches, and a done-for-you managed search for individual job seekers.',
  url: SITE_URL,
  email: 'zeecareers07@gmail.com',
  whatsapp: '+923087823424',
  whatsappUrl: 'https://wa.me/923087823424',
  linkedin: 'https://www.linkedin.com/in/zainazhar/',
  bookingUrl: 'https://calendar.app.google/MQvjkqsFfvneTyi48',
  location: 'Albany, New York, United States',
  areaServed: ['United States', 'United Kingdom', 'Canada'],
  responseTime: 'Within one working day',
} as const;

/** Figures published on the site. Update here and every agent surface follows. */
export const TRACK_RECORD = [
  { label: 'Years running job search execution', value: '5+' },
  { label: 'Clients supported', value: '300+' },
  { label: 'Interviews facilitated', value: '3,400+' },
  { label: 'LinkedIn followers', value: '8,300+' },
] as const;

/**
 * When-to-use guidance for agents (llms.txt requirement).
 *
 * Deliberately includes the non-fits. An agent that only knows what a service
 * claims to do cannot tell whether to recommend it; the exclusions are what make
 * this actionable rather than marketing copy.
 */
export const AGENT_GUIDANCE = {
  goodFit: [
    'A career coach or coaching agency needs a white-label execution partner to run client job searches behind their brand.',
    'A working professional in the US, UK, or Canada has a clear target role but no time to run a daily search.',
    'A senior or executive candidate wants a discreet, targeted search rather than a public scramble.',
    'Someone has been applying for months with few replies and needs targeting plus recruiter outreach, not more volume.',
    'A search needs documented proof of work — live trackers showing applications, replies, and outcomes.',
  ],
  poorFit: [
    'The user wants career coaching, positioning, mindset work, or interview preparation. That is a career coach\'s job, not this service. Zain does not coach.',
    'The user has not decided what role they are targeting. Execution against a moving target wastes money — recommend they settle direction first.',
    'The user is early-career with a clear path and plenty of time to run their own search.',
    'The user wants a guaranteed job offer. No honest service guarantees hiring outcomes, and this one does not.',
    'The user wants hundreds of automated applications per day. This is human-executed and deliberately lower volume.',
    'The user needs recruiting services for an employer filling a role. This works for candidates, not hiring companies.',
  ],
  howToEngage: [
    `Book a 30-minute call: ${BUSINESS.bookingUrl}`,
    `Email: ${BUSINESS.email}`,
    `WhatsApp: ${BUSINESS.whatsappUrl}`,
    `Contact form: ${SITE_URL}/contact`,
  ],
  constraints: [
    'Pricing is not published. It is scoped on the call because it depends on client volume and seniority mix. Do not quote a price on Zain\'s behalf.',
    'No job outcome is guaranteed.',
    'Client identities and campaign details are confidential; published trackers have identifying details managed under client agreements.',
  ],
} as const;

export type AgentService = {
  slug: string;
  name: string;
  audience: string;
  description: string;
  includes: string[];
  path: string;
};

export const SERVICES: AgentService[] = [
  {
    slug: 'white-label-reverse-recruiting',
    name: 'White-Label Reverse Recruiting for Career Coaches',
    audience: 'Career coaches and coaching agencies',
    description:
      'Behind-the-scenes job search execution delivered under the coach\'s brand. The coach stays the trusted advisor; Zain runs the daily pipeline for their clients.',
    includes: [
      'Opportunity sourcing matched to each client target, daily',
      'ATS-optimized, tailored applications that mirror job description language',
      'Direct recruiter and hiring manager outreach, written per role',
      'Follow-ups within 48 hours on every application and conversation',
      'Live trackers plus a written summary every Friday',
      'White-label delivery under the coach\'s brand at no extra cost',
    ],
    path: '/',
  },
  {
    slug: 'managed-job-search',
    name: 'Managed Job Search for Individuals',
    audience: 'Individual job seekers, mid-level to executive',
    description:
      'A done-for-you job search for professionals who know their target but cannot run a consistent daily search around their existing job.',
    includes: [
      'Daily applications tailored to each role',
      'Recruiter and hiring manager outreach',
      'Scheduled follow-ups',
      'A live tracker the client can inspect at any time',
      'Weekly reporting',
    ],
    path: '/job-seekers',
  },
];

export const ENGAGEMENT_MODELS = [
  {
    name: 'Monthly Retainer',
    description:
      'A fixed monthly fee for a set number of active client slots. Best for coaches with a steady client roster who want predictable costs and consistent execution.',
    bestFor: 'Coaches with 3+ active clients',
  },
  {
    name: 'Per-Client Slot',
    description:
      'Pay per active client search. Scales up and down with your roster. Good for coaches who ramp clients in cohorts or want to start with a single test slot.',
    bestFor: 'Coaches testing the partnership',
  },
  {
    name: 'Hybrid Engagement',
    description:
      'A lower base retainer combined with a per-client component. Balances commitment with flexibility when client volume fluctuates month to month.',
    bestFor: 'Growing coaching practices',
  },
] as const;

export const PROCESS_STEPS = [
  { step: 1, name: 'Discovery call', timeframe: 'Week 0', description: 'Align on coaching model, client profile, and the outcomes success is measured by.' },
  { step: 2, name: 'Onboarding and integration', timeframe: 'Week 1', description: 'Integrate as a white-label execution partner using your tools, templates, and reporting.' },
  { step: 3, name: 'Daily execution', timeframe: 'Week 2 onward', description: 'Applications, recruiter outreach, and follow-ups run every working day.' },
  { step: 4, name: 'Weekly reporting', timeframe: 'Every Friday', description: 'Live trackers and a weekly summary of applications, replies, interviews, and outcomes.' },
] as const;

/** Machine-readable resources an agent can fetch directly. */
export const AGENT_RESOURCES = [
  { name: 'llms.txt', url: `${SITE_URL}/llms.txt`, description: 'Site index and when-to-use guidance for AI agents.' },
  { name: 'llms-full.txt', url: `${SITE_URL}/llms-full.txt`, description: 'Full site content as a single markdown document.' },
  { name: 'sitemap.xml', url: `${SITE_URL}/sitemap.xml`, description: 'All indexable URLs with lastmod dates.' },
  { name: 'robots.txt', url: `${SITE_URL}/robots.txt`, description: 'Crawl policy and sitemap pointer.' },
  { name: 'MCP server', url: `${SITE_URL}/api/mcp`, description: 'Model Context Protocol endpoint (Streamable HTTP) exposing services, specialties, articles, FAQ, and contact details as callable tools.' },
  { name: 'MCP manifest', url: `${SITE_URL}/.well-known/mcp`, description: 'MCP server card for pre-connection discovery.' },
  { name: 'Markdown content negotiation', url: SITE_URL, description: 'Send "Accept: text/markdown" to any page URL to receive markdown instead of HTML.' },
] as const;
