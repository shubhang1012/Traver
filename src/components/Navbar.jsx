import { useState } from 'react';
import { useNavScroll } from '../hooks/useAnimations';
import './Navbar.css';

export default function Navbar() {
  const isScrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Vision', href: '#vision' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container--wide">
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
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
          <a href="#waitlist" className="navbar__cta" onClick={(e) => handleNavClick(e, '#waitlist')}>
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
