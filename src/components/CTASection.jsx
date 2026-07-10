import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './CTASection.css';

const ROLES = ['Traveler', 'Investor', 'Other'];

// Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_KEY = 'ec1df112-ca79-4b43-8f6f-93b4f4083916';

export default function CTASection() {
  const [ref, revealed] = useScrollReveal();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Traveler');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Traver Waitlist — ${role}`,
          from_name: 'Traver Waitlist',
          email: email.trim(),
          role: role,
          message: message.trim() || '(No message)',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setStatus('idle');
    setEmail('');
    setMessage('');
    setRole('Traveler');
  };

  return (
    <section className="cta-section" id="waitlist">
      <div className={`cta-section__content reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
        <span className="section-label">Get in Touch</span>
        <h2 className="cta-section__title">
          Your next great trip<br />
          is waiting. <span className="cta-section__title-accent">The right people are too.</span>
        </h2>
        <p className="cta-section__subtitle">
          Whether you want early access, have a suggestion, or want to invest in our vision —
          we'd love to hear from you.
        </p>

        {status === 'idle' || status === 'sending' || status === 'error' ? (
          <form className="cta-section__form" onSubmit={handleSubmit} id="waitlist-form">
            {/* Role selector */}
            <div className="cta-section__role-group">
              <label className="cta-section__field-label">I am a…</label>
              <div className="cta-section__roles">
                {ROLES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`cta-section__role-pill ${role === r ? 'cta-section__role-pill--active' : ''}`}
                    onClick={() => setRole(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Email input */}
            <div className="cta-section__field">
              <label className="cta-section__field-label" htmlFor="cta-email">Email address *</label>
              <input
                id="cta-email"
                type="email"
                className="cta-section__input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>

            {/* Message textarea */}
            <div className="cta-section__field">
              <label className="cta-section__field-label" htmlFor="cta-message">
                Message <span className="cta-section__optional">(optional)</span>
              </label>
              <textarea
                id="cta-message"
                className="cta-section__textarea"
                placeholder="Any suggestions, investment interest, or just say hello…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                disabled={status === 'sending'}
              />
            </div>

            {/* Error message */}
            {status === 'error' && (
              <p className="cta-section__error">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="cta-section__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="cta-section__spinner"></span>
                  Sending…
                </>
              ) : (
                <>
                  Join the Waitlist
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>

            <div className="cta-section__trust">
              <span>No spam. Ever.</span>
              <span className="cta-section__sep">·</span>
              <span>We won&apos;t share your email.</span>
              <span className="cta-section__sep">·</span>
              <span>Founding member benefits for early joiners.</span>
            </div>
          </form>
        ) : (
          <div className="cta-section__success">
            <div className="cta-section__success-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="cta-section__success-text">You&apos;re on the list! We&apos;ll be in touch soon.</p>
            <p className="cta-section__success-sub">
              Check your inbox for a confirmation from us.
            </p>
            <div className="cta-section__success-actions">
              <a href="#" className="cta-section__success-back" onClick={scrollToTop}>
                Back to top ↑
              </a>
              <button type="button" className="cta-section__success-reset" onClick={resetForm}>
                Submit another
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}