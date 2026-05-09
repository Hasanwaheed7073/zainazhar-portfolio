import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { ContactForm } from './ContactForm';

const CALENDAR_URL = 'https://calendar.app.google/MQvjkqsFfvneTyi48';
const WHATSAPP_URL = 'https://wa.me/923087823424';
const WHATSAPP_DISPLAY = '+92 308 7823424';
const EMAIL = 'zeecareers07@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/zain-a-385a0b236/';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface"
    >
      <Container as="div" className="section-pad">
        <div className="max-w-prose-wide">
          <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
            Get in Touch
          </p>
          <h2 id="contact-heading" className="mt-5 text-h1 font-semibold text-navy">
            Book a partner call. Or pick the channel you prefer.
          </h2>
          <p className="mt-6 text-lead text-ink-muted">
            Four ways to start the conversation. The 30-minute partner call is the fastest path to clarity.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: direct channels */}
          <div className="lg:col-span-5">
            {/* Primary: Calendar */}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-card border border-navy bg-navy p-8 text-surface transition-opacity duration-apple hover:opacity-90"
            >
              <p className="text-small font-medium uppercase tracking-[0.14em] text-navy-300">
                Recommended
              </p>
              <p className="mt-3 text-h2 font-semibold">Book a 30-minute partner call</p>
              <p className="mt-3 text-body text-navy-100">
                Pick a slot on my Google Calendar. No back and forth, no scheduling email chains.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-small font-medium">
                Open calendar
                <span aria-hidden="true">→</span>
              </p>
            </a>

            {/* Secondary channels */}
            <ul className="mt-6 grid grid-cols-1 gap-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-card border border-line bg-surface p-6 transition-opacity duration-apple hover:opacity-80"
                >
                  <div>
                    <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-body font-medium text-navy">{WHATSAPP_DISPLAY}</p>
                  </div>
                  <span aria-hidden="true" className="text-small font-medium text-navy-500">
                    Message →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-between gap-4 rounded-card border border-line bg-surface p-6 transition-opacity duration-apple hover:opacity-80"
                >
                  <div>
                    <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
                      Email
                    </p>
                    <p className="mt-1 text-body font-medium text-navy break-all">{EMAIL}</p>
                  </div>
                  <span aria-hidden="true" className="text-small font-medium text-navy-500">
                    Send →
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-card border border-line bg-surface p-6 transition-opacity duration-apple hover:opacity-80"
                >
                  <div>
                    <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-body font-medium text-navy">linkedin.com/in/zain-a-385a0b236</p>
                  </div>
                  <span aria-hidden="true" className="text-small font-medium text-navy-500">
                    Connect →
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <div className="rounded-card border border-line bg-surface-alt p-8 md:p-10">
              <p className="text-small font-medium uppercase tracking-[0.14em] text-ink-muted">
                Send a message
              </p>
              <p className="mt-3 text-h3 font-semibold text-navy">
                Prefer a written intro? Send the details here.
              </p>
              <p className="mt-2 text-body text-ink-muted">
                I respond within one working day. United States, United Kingdom, and Canada time zones supported.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
