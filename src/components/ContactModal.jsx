import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useContactModal } from './ContactModalContext';
import './ContactModal.css';

const ROLES = ['Traveler', 'Investor', 'Other'];
const WEB3FORMS_KEY = 'ec1df112-ca79-4b43-8f6f-93b4f4083916';

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [leaving, setLeaving] = useState(false);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Traveler');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleClose = useCallback(() => {
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      closeModal();
      setStatus('idle');
      setEmail('');
      setMessage('');
      setRole('Traveler');
    }, 260);
  }, [closeModal]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, handleClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

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
          subject: `Traver — ${role}`,
          from_name: 'Traver Contact',
          email: email.trim(),
          role,
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

  return createPortal(
    <div
      className={`cm-backdrop${leaving ? ' cm-backdrop--leaving' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Get in Touch"
    >
      <div className="cm-card" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className="cm-close" onClick={handleClose} aria-label="Close modal">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>

        {status === 'success' ? (
          /* Success spans both columns */
          <div className="cm-left" style={{ gridColumn: '1 / -1', borderRight: 'none' }}>
            <div className="cm-success">
              <div className="cm-success__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="cm-success__title">You're on the list! We'll be in touch soon.</p>
              <p className="cm-success__sub">Check your inbox for a confirmation from us.</p>
              <div className="cm-success__actions">
                <button className="cm-success__close-btn" onClick={handleClose}>Close</button>
                <button className="cm-success__reset" onClick={() => setStatus('idle')}>Submit another</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* ── Left panel: heading ── */}
            <div className="cm-left">
              <div className="cm-header">
                <span className="cm-label">Get in Touch</span>
                <h2 className="cm-title">
                  Your next great trip<br />
                  is waiting. <span className="cm-title-accent">The right people are too.</span>
                </h2>
                <p className="cm-subtitle">
                  Whether you want early access, have a suggestion, or want to invest in our vision —
                  we'd love to hear from you.
                </p>
              </div>
            </div>

            {/* ── Right panel: form ── */}
            <div className="cm-right">
              <form className="cm-form" onSubmit={handleSubmit} id="contact-form">
                {/* Role */}
                <div className="cm-field">
                  <label className="cm-field-label">I am a…</label>
                  <div className="cm-roles">
                    {ROLES.map((r) => (
                      <button
                        key={r}
                        type="button"
                        className={`cm-role-pill${role === r ? ' cm-role-pill--active' : ''}`}
                        onClick={() => setRole(r)}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="cm-field">
                  <label className="cm-field-label" htmlFor="cm-email">Email address *</label>
                  <input
                    id="cm-email"
                    type="email"
                    className="cm-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'sending'}
                    autoFocus
                  />
                </div>

                {/* Message */}
                <div className="cm-field">
                  <label className="cm-field-label" htmlFor="cm-message">
                    Message <span className="cm-optional">(optional)</span>
                  </label>
                  <textarea
                    id="cm-message"
                    className="cm-textarea"
                    placeholder="Any suggestions, investment interest, or just say hello…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    disabled={status === 'sending'}
                  />
                </div>

                {status === 'error' && (
                  <p className="cm-error">Something went wrong. Please try again.</p>
                )}

                <button type="submit" className="cm-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <><span className="cm-spinner" /> Sending…</>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <div className="cm-trust">
                  <span>No spam. Ever.</span>
                  <span className="cm-trust-sep">·</span>
                  <span>We won't share your email.</span>
                  <span className="cm-trust-sep">·</span>
                  <span>Founding member benefits for early joiners.</span>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
