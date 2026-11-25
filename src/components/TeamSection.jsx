import React from 'react';
import { teamData } from '../data';
import '../styles/team.css';

export const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        {/* Section Header */}
        <div className="team-header">
          {teamData.badge && (
            <div className="section-badge">{teamData.badge}</div>
          )}
          <h2 className="section-title-large">{teamData.sectionTitle}</h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamData.members.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-img-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-specialization">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
