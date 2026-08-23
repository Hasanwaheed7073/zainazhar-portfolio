import { Hero } from '@/components/sections/Hero';
import { AudienceSelector } from '@/components/sections/AudienceSelector';
import { TrustBar } from '@/components/sections/TrustBar';
import { Bottleneck } from '@/components/sections/Bottleneck';
import { Pillars } from '@/components/sections/Pillars';
import { Proof } from '@/components/sections/Proof';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { About } from '@/components/sections/About';
import { Faq, FAQ_ITEMS } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import {
  SITE_URL,
  PERSON_ID,
  BUSINESS_ID,
  WEBSITE_ID,
  SAME_AS,
  AREA_SERVED,
  BUSINESS_ADDRESS,
  PERSON_REF,
  BUSINESS_REF,
} from '@/lib/schema';

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Zain Azhar',
  alternateName: 'Zain A.',
  jobTitle: 'Reverse Recruiter for Career Coaches',
  description: 'Reverse Recruiter and Job Search Operator running end-to-end execution for career coaches and their clients.',
  url: SITE_URL,
  mainEntityOfPage: WEBSITE_ID,
  image: `${SITE_URL}/zain-headshot.jpg`,
  email: 'mailto:zeecareers07@gmail.com',
  telephone: '+923087823424',
  sameAs: SAME_AS,
  address: BUSINESS_ADDRESS,
  areaServed: AREA_SERVED,
  worksFor: BUSINESS_REF,
  knowsAbout: [
    'Reverse Recruiting',
    'Job Search Execution',
    'ATS Optimization',
    'Recruiter Outreach',
    'Career Coach Partnership',
    'White Label Recruiting',
  ],
};

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
  about: BUSINESS_REF,
};

const BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: 'Zain Azhar — Reverse Recruiting',
  description: 'White-label reverse recruiting and job search execution for career coaches. 300+ clients, 3,400+ interviews across the United States, United Kingdom, and Canada.',
  url: SITE_URL,
  image: `${SITE_URL}/zain-headshot.jpg`,
  logo: `${SITE_URL}/meta-logo.png`,
  telephone: '+923087823424',
  email: 'zeecareers07@gmail.com',
  sameAs: SAME_AS,
  address: BUSINESS_ADDRESS,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.6526,
    longitude: -73.7562,
  },
  founder: PERSON_REF,
  provider: PERSON_REF,
  areaServed: AREA_SERVED,
  serviceType: 'Reverse Recruiting for Career Coaches',
  knowsLanguage: 'en',
};

// The coach-facing offering. Engagement models only — exact pricing is scoped on
// the partner call, so no price/priceRange is asserted here.
const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#reverse-recruiting-service`,
  name: 'White-Label Reverse Recruiting for Career Coaches',
  description: 'Behind-the-scenes job search execution for career coaches: daily ATS-optimized applications, recruiter and hiring manager outreach, structured follow-ups, and weekly reporting delivered under the coach’s brand.',
  url: SITE_URL,
  serviceType: 'Reverse Recruiting',
  category: 'Career Services',
  provider: BUSINESS_REF,
  areaServed: AREA_SERVED,
  audience: {
    '@type': 'Audience',
    audienceType: 'Career coaches and career services practices',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engagement Models',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Monthly Retainer',
        description: 'A fixed monthly fee for a set number of active client slots. Best for coaches with a steady client roster who want predictable costs and consistent execution.',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Per-Client Slot',
        description: 'Pay per active client search. Scales up and down with your roster. Good for coaches who ramp clients in cohorts or want to start with a single test slot.',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Hybrid Engagement',
        description: 'A lower base retainer combined with a per-client component. Balances commitment with flexibility when client volume fluctuates month to month.',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Zain Azhar — Reverse Recruiter',
  description: 'Reverse recruiting and job search execution for career coaches and the professionals they serve.',
  inLanguage: 'en',
  publisher: BUSINESS_REF,
  about: PERSON_REF,
};

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Separate script tags rather than one @graph — every scanner parses
          top-level nodes, not all of them walk into @graph. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <Hero />
      <AudienceSelector />
      <TrustBar />
      <Bottleneck />
      <Pillars />
      <Proof />
      <Process />
      <Pricing />
      <About />
      <Faq />
      <Contact />
      {/* Homepage complete. P11: /job-seekers page next. */}
    </main>
  );
}
