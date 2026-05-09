import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Bottleneck } from '@/components/sections/Bottleneck';
import { Pillars } from '@/components/sections/Pillars';
import { Proof } from '@/components/sections/Proof';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Faq, FAQ_ITEMS } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zain Azhar',
  alternateName: 'Zain A.',
  jobTitle: 'Reverse Recruiter for Career Coaches',
  description: 'Reverse Recruiter and Job Search Operator running end-to-end execution for career coaches and their clients.',
  url: 'https://zainazhar.vercel.app',
  image: 'https://zainazhar.vercel.app/zain-headshot.jpg',
  email: 'mailto:zeecareers07@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/zain-a-385a0b236/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Albany',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: ['United States', 'United Kingdom', 'Canada'],
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
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zain Azhar — Reverse Recruiting',
  description: 'White-label reverse recruiting and job search execution for career coaches. 300+ clients, 400+ interviews across the United States, United Kingdom, and Canada.',
  url: 'https://zainazhar.vercel.app',
  image: 'https://zainazhar.vercel.app/zain-headshot.jpg',
  provider: {
    '@type': 'Person',
    name: 'Zain Azhar',
  },
  areaServed: ['United States', 'United Kingdom', 'Canada'],
  serviceType: 'Reverse Recruiting for Career Coaches',
};

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <Hero />
      <TrustBar />
      <Bottleneck />
      <Pillars />
      <Proof />
      <Process />
      <About />
      <Faq />
      <Contact />
      {/* Homepage complete. P11: /job-seekers page next. */}
    </main>
  );
}
