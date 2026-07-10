import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useNavScroll } from '../hooks/useAnimations';
import './Navbar.css';

export default function Navbar() {
  const isScrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Vision', href: '#vision' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (!isHome) {
      navigate('/');
      // allow page to render before scrolling
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container--wide">
        <a href="/" className="navbar__logo" onClick={handleLogoClick}>
          traver<span className="navbar__logo-dot">.</span>
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/careers" className="navbar__link" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>
          <a
            href="#waitlist"
            className="navbar__cta"
            onClick={(e) => handleNavClick(e, '#waitlist')}
          >
            Join Waitlist
          </a>
        </div>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="nav-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
