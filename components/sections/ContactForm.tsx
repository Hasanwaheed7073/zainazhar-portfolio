'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Web3Forms Setup
// Registered to: zeecareers07@gmail.com
// Do not modify this key without explicit authorization.
const WEB3FORMS_ACCESS_KEY: string = 'f3d3221c-033c-4e1a-96cb-2ab6ccb7307c';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (WEB3FORMS_ACCESS_KEY === 'WEB3FORMS_ACCESS_KEY') {
      console.error('Web3Forms access key not configured');
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
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
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
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
      {status === 'error' && (
        <p className="text-center text-sm text-red-500 mt-4">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
