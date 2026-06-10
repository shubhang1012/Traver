import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo" onClick={scrollToTop}>
              traver<span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">Travel, together.</p>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Product</h4>
              <a href="#how-it-works" className="footer__nav-link" onClick={(e) => scrollTo(e, '#how-it-works')}>How It Works</a>
              <a href="#features" className="footer__nav-link" onClick={(e) => scrollTo(e, '#features')}>Features</a>
              <a href="#vision" className="footer__nav-link" onClick={(e) => scrollTo(e, '#vision')}>Vision</a>
              <a href="#roadmap" className="footer__nav-link" onClick={(e) => scrollTo(e, '#roadmap')}>Roadmap</a>
            </div>

            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Company</h4>
              <a href="#why-exists" className="footer__nav-link" onClick={(e) => scrollTo(e, '#why-exists')}>About Us</a>
              <a href="#founder-story" className="footer__nav-link" onClick={(e) => scrollTo(e, '#founder-story')}>Founder Story</a>
              <a href="#faq" className="footer__nav-link" onClick={(e) => scrollTo(e, '#faq')}>FAQ</a>
            </div>

            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Legal</h4>
              <a href="#" className="footer__nav-link">Privacy Policy</a>
              <a href="#" className="footer__nav-link">Terms of Service</a>
            </div>

            <div className="footer__nav-col">
              <h4 className="footer__nav-heading">Connect</h4>
              <a href="https://instagram.com" className="footer__nav-link footer__nav-link--social" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a href="https://twitter.com" className="footer__nav-link footer__nav-link--social" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4l16 16M4 20L20 4"/>
                </svg>
                X / Twitter
              </a>
              <a href="https://tiktok.com" className="footer__nav-link footer__nav-link--social" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a4 4 0 1 0 4 4V4c.5 1.5 2 3 4 3"/>
                </svg>
                TikTok
              </a>
              <a href="https://linkedin.com" className="footer__nav-link footer__nav-link--social" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
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