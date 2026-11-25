import React from 'react';
import { trainingData } from '../data';
import '../styles/training.css';

export const TrainingSection = () => {
  return (
    <section id="classes" className="training-section">
      <div className="container">
        {/* Section Header */}
        <div className="training-header">
          <h2 className="section-title-large">{trainingData.sectionHeading}</h2>
        </div>

        {/* Categories Grid */}
        <div className="training-grid">
          {trainingData.categories.map((category) => (
            <a key={category.id} href={category.link} className="training-card">
              <div className="training-img-wrapper">
                <img
                  src={category.image}
                  alt={category.alt || category.title}
                  className="training-img"
                  loading="lazy"
                />
              </div>
              <div className="training-title-bar">
                <h3 className="training-title">{category.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
