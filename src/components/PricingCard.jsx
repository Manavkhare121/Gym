import React from 'react';

export const PricingCard = ({ plan }) => {
  return (
    <div className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
      <div className="pricing-card-top">
        <h3 className="pricing-title">{plan.title}</h3>
        <div className="pricing-price-wrap">
          <span className="pricing-amount">
            {plan.currency}{plan.price}
          </span>
          <span className="pricing-duration">/{plan.duration}</span>
        </div>
        <p className="pricing-plan-badge">{plan.name}</p>
      </div>

      <ul className="pricing-features-list">
        {plan.features.map((feature, index) => (
          <li key={index} className="pricing-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.buttonLink || '#contact'}
        className={`btn-pill pricing-btn ${plan.isPopular ? 'btn-pill-lime' : 'btn-pill-dark'}`}
      >
        <span>{plan.buttonText}</span>
        <span className="btn-arrow-circle" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </a>
    </div>
  );
};
