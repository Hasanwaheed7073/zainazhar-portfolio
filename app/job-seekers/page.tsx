import type { Metadata } from 'next';
import { JobSeekerHero } from '@/components/sections/JobSeekerHero';
import { JobSeekerHow } from '@/components/sections/JobSeekerHow';
import { JobSeekerCta } from '@/components/sections/JobSeekerCta';
import { TrustBar } from '@/components/sections/TrustBar';
import { Proof } from '@/components/sections/Proof';

export const metadata: Metadata = {
  title: 'Reverse Recruiter for Job Seekers',
  description: 'A managed job search service for mid-level to executive professionals. Daily applications, recruiter outreach, follow-ups, and live reporting across the United States, United Kingdom, and Canada.',
  alternates: {
    canonical: 'https://zainazhar.vercel.app/job-seekers',
  },
  openGraph: {
    title: 'Reverse Recruiter for Job Seekers — Zain Azhar',
    description: 'A managed job search service that runs your applications, outreach, and follow-ups every working day.',
    url: 'https://zainazhar.vercel.app/job-seekers',
    type: 'website',
  },
};

const SERVICE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed Job Search for Individuals',
  description: 'A reverse recruiting service for individual job seekers. Daily applications, recruiter and hiring manager outreach, follow-ups, and weekly reporting.',
  provider: {
    '@type': 'Person',
    name: 'Zain Azhar',
    url: 'https://zainazhar.vercel.app',
  },
  areaServed: ['United States', 'United Kingdom', 'Canada'],
  serviceType: 'Reverse Recruiting',
  audience: {
    '@type': 'Audience',
    audienceType: 'Mid-level to executive professionals',
  },
};

export default function JobSeekersPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <JobSeekerHero />
      <TrustBar />
      <JobSeekerHow />
      <Proof />
      <JobSeekerCta />
    </main>
  );
}
