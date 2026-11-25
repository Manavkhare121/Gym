import React from 'react';
import { ctaData, imageData } from '../data';
import '../styles/cta.css';

export const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg-layer">
        <img
          src={imageData.ctaBg}
          alt="Fitzone CTA Background"
          className="cta-bg-img"
          loading="lazy"
        />
        <div className="cta-overlay"></div>
      </div>

      <div className="container">
        <div className="cta-content">
          <h2 className="cta-heading">
            {ctaData.headingParts.join(' ')}
          </h2>
          <p className="cta-desc">{ctaData.description}</p>
          <a href={ctaData.button.link} className="btn-pill btn-pill-lime">
            <span>{ctaData.button.label}</span>
            <span className="btn-arrow-circle" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
