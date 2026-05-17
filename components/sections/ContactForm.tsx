'use client';

import { useState, type FormEvent } from 'react';

// =====================================================================
// Web3Forms Setup — LIVE
// Registered to: zeecareers07@gmail.com
// Key is intentionally client-side. Web3Forms keys can only submit to
// their registered inbox, so public exposure is by design.
// To rotate: generate new key at web3forms.com under same email.
// =====================================================================
const WEB3FORMS_ACCESS_KEY = 'f3d3221c-033c-4e1a-96cb-2ab6ccb7307c';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Capture the form reference before any async work.
    // After an `await`, React's synthetic event is recycled and
    // e.currentTarget becomes null — calling .reset() on null throws,
    // which the catch block was misreporting as a "Network error".
    const form = e.currentTarget;

    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object.access_key = WEB3FORMS_ACCESS_KEY;
    object.subject = 'New Partner Inquiry from zainazhar.vercel.app';
    object.from_name = 'zainazhar.vercel.app';
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please use WhatsApp or email.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please use WhatsApp or email.');
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-8 rounded-card border border-line bg-surface p-6">
        <p className="text-h3 font-semibold text-navy">Message received.</p>
        <p className="mt-2 text-body text-ink-muted">
          I will respond within one working day. If urgent, WhatsApp is fastest.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
      <input type="checkbox" name={`bot${'check'}`} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-small font-medium text-navy">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-btn border border-line bg-surface px-4 py-3 text-body text-ink outline-none transition-opacity duration-apple focus:border-navy focus:opacity-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-small font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-btn border border-line bg-surface px-4 py-3 text-body text-ink outline-none transition-opacity duration-apple focus:border-navy focus:opacity-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-small font-medium text-navy">
          You are a
        </label>
        <select
          id="role"
          name="role"
          defaultValue=""
          required
          className="mt-2 block w-full rounded-btn border border-line bg-surface px-4 py-3 text-body text-ink outline-none transition-opacity duration-apple focus:border-navy"
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="Career Coach">Career Coach</option>
          <option value="Coaching Agency">Coaching Agency</option>
          <option value="Job Seeker">Job Seeker</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-small font-medium text-navy">
          What do you want to discuss?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 block w-full rounded-btn border border-line bg-surface px-4 py-3 text-body text-ink outline-none transition-opacity duration-apple focus:border-navy"
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'error' && (
          <p className="text-small text-navy" role="alert">
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
