'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="rounded-card bg-navy/5 p-6 text-center">
        <h3 className="text-h3 font-semibold text-navy">Message sent</h3>
        <p className="mt-2 text-body text-ink-muted">
          Thanks for reaching out. I'll get back to you within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-small font-medium text-navy">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-line bg-surface px-4 py-3 text-body outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-small font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-line bg-surface px-4 py-3 text-body outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy"
            placeholder="jane@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="linkedin" className="text-small font-medium text-navy">
          LinkedIn URL (Optional)
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          className="w-full rounded-md border border-line bg-surface px-4 py-3 text-body outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy"
          placeholder="https://linkedin.com/in/..."
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-small font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-md border border-line bg-surface px-4 py-3 text-body outline-none transition-colors focus:border-navy focus:ring-1 focus:ring-navy"
          placeholder="How can I help you and your clients?"
        />
      </div>
      <Button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-navy py-6 text-body font-medium text-white hover:bg-navy/90"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
