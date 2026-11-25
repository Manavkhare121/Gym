import React, { useState } from 'react';
import { faqData } from '../data';
import '../styles/faq.css';

export const FAQSection = () => {
  // Default first item open as in reference
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header">
          <h2 className="section-title-large">{faqData.sectionTitle}</h2>
        </div>

        {/* Accordion Wrap */}
        <div className="faq-accordion-wrap">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className="faq-answer-wrap"
                  style={{ maxHeight: isOpen ? '240px' : '0' }}
                >
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
