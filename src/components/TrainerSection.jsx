import React from 'react';
import { trainerData } from '../data';
import '../styles/trainer.css';

export const TrainerSection = () => {
  return (
    <section id="about" className="trainer-section">
      <div className="container">
        <div className="trainer-grid">
          {/* Left Visual Box */}
          <div className="trainer-visual-box">
            <div className="trainer-img-wrapper">
              <img
                src={trainerData.mainImage}
                alt={trainerData.heading}
                className="trainer-main-img"
                loading="lazy"
              />
              <div className="trainer-stat-overlay">
                <span className="trainer-stat-number">{trainerData.experienceYears}</span>
                <span className="trainer-stat-label">{trainerData.experienceLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="trainer-info-box">
            {trainerData.badge && (
              <div className="section-badge">{trainerData.badge}</div>
            )}
            <h2 className="trainer-heading">{trainerData.heading}</h2>
            <p className="trainer-desc">{trainerData.description}</p>

            <a href={trainerData.button.link} className="btn-pill btn-pill-lime">
              <span>{trainerData.button.label}</span>
              <span className="btn-arrow-circle" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>

            {/* Certifications */}
            <div className="trainer-cert-box">
              <h3 className="trainer-cert-title">{trainerData.certificationsHeading}</h3>
              <ul className="trainer-cert-list">
                {trainerData.certifications.map((cert, index) => (
                  <li key={index} className="trainer-cert-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
