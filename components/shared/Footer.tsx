import Link from 'next/link';
import { Container } from './Container';

const CONTACT = {
  email: 'zeecareers07@gmail.com',
  whatsapp: '+923087823424',
  whatsappLink: 'https://wa.me/923087823424',
  linkedin: 'https://www.linkedin.com/in/zainazhar/',
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <Container as="div" className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand + tagline */}
          <div>
            <p className="text-h3 font-semibold text-navy">Zain Azhar</p>
            <p className="mt-3 max-w-prose-tight text-small text-ink-muted">
              Reverse Recruiter for career coaches. Job search execution behind the scenes across United States, United Kingdom, and Canada.
            </p>
          </div>

          {/* Site links */}
          <div>
            <p className="text-small font-semibold text-navy">Site</p>
            <ul className="mt-4 space-y-3 text-small text-ink-muted">
              <li><Link href="/" className="hover:text-navy transition-opacity duration-apple">Home</Link></li>
              <li><Link href="/#services" className="hover:text-navy transition-opacity duration-apple">Services</Link></li>
              <li><Link href="/#proof" className="hover:text-navy transition-opacity duration-apple">Live Proof</Link></li>
              <li><Link href="/#process" className="hover:text-navy transition-opacity duration-apple">Process</Link></li>
              <li><Link href="/job-seekers" className="hover:text-navy transition-opacity duration-apple">For Job Seekers</Link></li>
              <li><Link href="/blog" className="hover:text-navy transition-opacity duration-apple">Blog</Link></li>
              <li><Link href="/reverse-recruiter" className="hover:text-navy transition-opacity duration-apple">Reverse Recruiter by Field</Link></li>
              <li><Link href="/about" className="hover:text-navy transition-opacity duration-apple">About</Link></li>
              <li><Link href="/contact" className="hover:text-navy transition-opacity duration-apple">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-small font-semibold text-navy">Contact</p>
            <ul className="mt-4 space-y-3 text-small text-ink-muted">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-navy transition-opacity duration-apple">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-opacity duration-apple">
                  WhatsApp {CONTACT.whatsapp}
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-opacity duration-apple">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 md:flex-row md:items-center">
          <p className="text-small text-ink-soft">© {year} Zain Azhar. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-small text-ink-soft">
            <li><Link href="/privacy" className="hover:text-navy transition-opacity duration-apple">Privacy</Link></li>
            <li><Link href="/developers" className="hover:text-navy transition-opacity duration-apple">For AI agents</Link></li>
            <li><a href="/llms.txt" className="font-mono hover:text-navy transition-opacity duration-apple">llms.txt</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
