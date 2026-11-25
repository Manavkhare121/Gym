import React from 'react';
import { activitiesData } from '../data';
import '../styles/activities.css';

export const ActivitiesSection = () => {
  return (
    <section className="activities-section">
      <div className="container">
        {/* Section Header */}
        <div className="activities-header">
          <h2 className="section-title-large">{activitiesData.sectionTitle}</h2>
          <p className="section-subtitle">{activitiesData.sectionSubtitle}</p>
        </div>

        {/* Activities Grid */}
        <div className="activities-grid">
          {activitiesData.activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-img-wrapper">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="activity-img"
                  loading="lazy"
                />
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-desc">{activity.description}</p>
                <a href={activity.link} className="activity-link">
                  <span>{activity.buttonText}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
