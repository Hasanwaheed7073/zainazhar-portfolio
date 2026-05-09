import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/shared/Nav';
import { Footer } from '@/components/shared/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zainazhar.vercel.app'),
  title: {
    default: 'Zain Azhar — Reverse Recruiter for Career Coaches',
    template: '%s — Zain Azhar',
  },
  description: 'Reverse Recruiter for career coaches. I run job search execution behind the scenes. 300+ clients, 400+ interviews across United States, United Kingdom, and Canada.',
  applicationName: 'Zain Azhar — Reverse Recruiter',
  authors: [{ name: 'Zain Azhar', url: 'https://www.linkedin.com/in/zain-a-385a0b236/' }],
  creator: 'Zain Azhar',
  publisher: 'Zain Azhar',
  keywords: [
    'reverse recruiter',
    'reverse recruiter for career coaches',
    'job search execution partner',
    'white label reverse recruiting',
    'career coach execution partner',
    'managed job search',
    'reverse recruiting USA',
    'reverse recruiting United Kingdom',
    'reverse recruiting Canada',
    'ATS optimized applications',
    'recruiter outreach service',
    'job search operator',
  ],
  alternates: {
    canonical: 'https://zainazhar.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zainazhar.vercel.app',
    siteName: 'Zain Azhar',
    title: 'Zain Azhar — Reverse Recruiter for Career Coaches',
    description: 'I run job search execution behind the scenes for career coaches. 300+ clients, 400+ interviews across United States, United Kingdom, and Canada.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zain Azhar — Reverse Recruiter for Career Coaches',
    description: 'Job search execution partner for career coaches. 300+ clients, 400+ interviews.',
    creator: '@zainazhar',
  },
  category: 'Career Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  themeColor: '#0A1F44',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-surface text-ink antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
