import React, { useState, useEffect } from 'react';
import { navbarData } from '../data';
import '../styles/navbar.css';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-container" aria-label="Main Navigation">
          {/* Logo */}
          <a href={navbarData.logo.link} className="navbar-logo" onClick={closeMenu}>
            <img
              src={navbarData.logo.src}
              alt={navbarData.logo.alt}
              className="navbar-logo-img"
            />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navbarData.links.map((link) => (
              <li key={link.label} className="nav-link-item">
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="nav-action-desktop">
            <a href={navbarData.button.path} className="btn-pill btn-pill-lime">
              <span>{navbarData.button.label}</span>
              <span className="btn-arrow-circle" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navbarData.links.map((link) => (
            <li key={link.label}>
              <a href={link.path} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={navbarData.button.path}
          className="btn-pill btn-pill-lime mobile-drawer-btn"
          onClick={closeMenu}
        >
          <span>{navbarData.button.label}</span>
          <span className="btn-arrow-circle" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};
