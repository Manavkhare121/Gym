import React from 'react';
import { pricingPlans, pricingHeader } from '../data';
import { PricingCard } from './PricingCard';
import '../styles/pricing.css';

export const PricingSection = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        {/* Section Header */}
        <div className="pricing-header">
          <h2 className="section-title-large">
            {pricingHeader.headingParts.join(' ')}
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
