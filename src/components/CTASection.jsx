import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './CTASection.css';

export default function CTASection() {
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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="cta-section" id="waitlist">
      <div className={`cta-section__content reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
        <span className="section-label">Waitlist</span>
        <h2 className="cta-section__title">
          Your next great trip<br />
          is waiting. <span className="cta-section__title-accent">The right people are too.</span>
        </h2>
        <p className="cta-section__subtitle">
          Traver is being built for people who believe the journey is better with company —
          and who want to be part of making that easier for everyone.
        </p>

        {!submitted ? (
          <form className="cta-section__form" onSubmit={handleSubmit} id="waitlist-form">
            <div className="cta-section__input-wrap">
              <input
                type="email"
                className="cta-section__input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-section__submit">
                Join Waitlist
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="cta-section__trust">
              <span>No spam. Ever.</span>
              <span className="cta-section__sep">·</span>
              <span>We won't share your email.</span>
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
            <p className="cta-section__success-text">You're on the list. We'll be in touch soon.</p>
            <a href="#" className="cta-section__success-back" onClick={scrollToTop}>
              Back to top ↑
            </a>
          </div>
        )}
      </div>
    </section>
  );
}