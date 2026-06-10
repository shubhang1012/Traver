import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('loaded');
    }
  }, []);

  const scrollToWaitlist = (e) => {
    e.preventDefault();
    document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img
          ref={imgRef}
          src="/Gemini_Generated_Image_q34mg6q34mg6q34m.png"
          alt="Travelers exploring the world together"
          className="hero__bg-image"
        />
        <div className="hero__bg-overlay"></div>
      </div>

      <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--2" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--3" aria-hidden="true"></div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          <span>Coming Soon</span>
        </div>

        <h1 className="hero__title">
          Every great trip<br />
          <em>deserves the right company.</em>
        </h1>

        <p className="hero__subtitle">
          Traver connects you with like-minded travelers — before, during, and
          after your trips. Plan together. Meet up. Make the trip.
        </p>

        <div className="hero__actions">
          <a href="#waitlist" className="hero__btn hero__btn--primary" onClick={scrollToWaitlist}>
            Join the Waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className="hero__btn hero__btn--secondary" onClick={scrollToHowItWorks}>
            See How It Works
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}