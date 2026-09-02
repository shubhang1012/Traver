import { Link } from 'react-router-dom';
import { useContactModal } from './ContactModalContext';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useContactModal();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* ── Footer nav ── */}
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo" onClick={scrollToTop}>
              traver<span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">Travel, together.</p>
            <p className="footer__bio">
              Connecting travelers around the world for shared adventures, spontaneous road trips, and lifelong memories.
            </p>
            <div className="footer__badge">
              <span className="footer__badge-dot"></span>
              Early access waitlist open
            </div>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Company</h4>
              <Link to="/vision" className="footer__nav-link">Our Vision</Link>
              <Link to="/how-it-works" className="footer__nav-link">How It Works</Link>
            </div>

            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Connect</h4>
              <a
                href="https://www.instagram.com/traver.in/"
                className="footer__nav-link footer__nav-link--social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
            </div>

            <div className="footer__card">
              <h4 className="footer__card-title">Have questions or ideas?</h4>
              <p className="footer__card-desc">
                We're building Traver in the open with our early community.
              </p>
              <button
                type="button"
                className="footer__card-cta"
                onClick={openModal}
              >
                Get in touch
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Traver. Built with love — and a lot of late nights — by people who really want you to stop eating alone in beautiful cities.
          </p>
        </div>
      </div>
    </footer>
  );
}