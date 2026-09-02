import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useNavScroll } from '../hooks/useAnimations';
import { useContactModal } from './ContactModalContext';
import './Navbar.css';

export default function Navbar() {
  const isScrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { openModal } = useContactModal();

  const routeLinks = [
    { label: 'Vision', to: '/vision' },
    { label: 'How It Works', to: '/how-it-works' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleGetInTouch = () => {
    setMenuOpen(false);
    openModal();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container--wide">
        <a href="/" className="navbar__logo" onClick={handleLogoClick}>
          traver<span className="navbar__logo-dot">.</span>
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {routeLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="navbar__cta"
            onClick={handleGetInTouch}
            id="nav-get-in-touch"
          >
            Get in Touch
          </button>
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
