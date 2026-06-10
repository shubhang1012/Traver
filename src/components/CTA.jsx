import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './CTA.css';

export default function CTA() {
  const [ref, revealed] = useScrollReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="cta" id="waitlist">
      <div className={`cta__content container reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
        <span className="section-label">Join</span>
        <h2 className="cta__title">
          Your next adventure starts<br />with a companion.
        </h2>
        <p className="cta__subtitle">
          Join the waitlist. Be the first to know when Traver launches.
        </p>

        {!submitted ? (
          <form className="cta__form" onSubmit={handleSubmit} id="waitlist-form">
            <div className="cta__input-wrap">
              <input
                type="email"
                className="cta__input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="waitlist-email"
                aria-label="Email address for waitlist"
              />
              <button type="submit" className="cta__submit" id="waitlist-submit">
                Join Waitlist
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <p className="cta__disclaimer">No spam. Just launch updates.</p>
          </form>
        ) : (
          <div className="cta__success">
            <div className="cta__success-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="cta__success-text">You're on the list. We'll be in touch soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
