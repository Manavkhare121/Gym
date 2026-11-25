import React from 'react';
import { heroData } from '../data';
import '../styles/hero.css';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Layers */}
      <div className="hero-bg-layer">
        <img
          src={heroData.backgroundImage}
          alt="Fitzone Gym Hero"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      {/* Main Container */}
      <div className="container hero-main-container">
        {/* Left Content */}
        <div className="hero-content">
          {/* Rating Pill Badge */}
          <div className="hero-rating-badge">
            <div className="hero-stars" aria-label="5 stars rating">
              {[...Array(heroData.rating.stars)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="hero-rating-text-wrap">
              <img
                src={heroData.rating.googleIcon}
                alt="Google"
                className="hero-google-icon"
              />
              <span>{heroData.rating.text}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            {heroData.headingParts.map((word, index) => (
              <span key={index} className="hero-heading-word">
                {word}
              </span>
            ))}
          </h1>

          {/* CTA Action Button */}
          <a href={heroData.primaryButton.link} className="btn-pill btn-pill-lime">
            <span>{heroData.primaryButton.label}</span>
            <span className="btn-arrow-circle" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Right Hero Athlete Cutout Visual */}
        {/* <div className="hero-visual">
          <img
            src={heroData.athleteImage}
            alt="Fitzone Muscular Athlete"
            className="hero-athlete-img"
          />
        </div> */}
      </div>

      {/* Bottom Contact Strip */}
      <div className="container hero-bottom-bar">
        <div className="hero-contact-wrap">
          <div className="hero-contact-address">
            <span>{heroData.contactInfo.address}</span>
          </div>
          <div className="hero-contact-divider" aria-hidden="true"></div>
          <div className="hero-contact-info-col">
            <a href={`mailto:${heroData.contactInfo.email}`}>
              {heroData.contactInfo.email}
            </a>
            <a href={`tel:${heroData.contactInfo.phone}`}>
              {heroData.contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
