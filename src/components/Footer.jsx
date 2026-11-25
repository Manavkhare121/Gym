import React, { useState } from 'react';
import { footerData } from '../data';
import '../styles/footer.css';

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      setMessageSent(true);
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => setMessageSent(false), 4000);
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Contact Info (Call + Email in one column) */}
          <div className="footer-col footer-contact-col">
            <div className="footer-contact-block">
              <span className="footer-card-label">{footerData.callHeading}</span>
              <div className="footer-card-values">
                {footerData.phones.map((phone, index) => (
                  <a key={index} href={`tel:${phone}`} className="footer-card-val">
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-contact-block">
              <span className="footer-card-label">{footerData.emailHeading}</span>
              <div className="footer-card-values">
                <a href={`mailto:${footerData.email}`} className="footer-card-val">
                  {footerData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">{footerData.quickLinksHeading}</h3>
            <ul className="footer-links-list">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.path}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Others Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">{footerData.otherLinksHeading}</h3>
            <ul className="footer-links-list">
              {footerData.otherLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.path}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Send Message Form */}
          <div className="footer-col footer-message-box">
            <h3 className="footer-col-title">{footerData.formHeading}</h3>
            <form onSubmit={handleSubmit} className="footer-form">
              <input
                type="text"
                name="name"
                placeholder={footerData.formPlaceholders.name}
                value={formData.name}
                onChange={handleChange}
                required
                className="footer-input"
                aria-label="Name"
              />
              <input
                type="email"
                name="email"
                placeholder={footerData.formPlaceholders.email}
                value={formData.email}
                onChange={handleChange}
                required
                className="footer-input"
                aria-label="Email"
              />
              <input
                type="tel"
                name="phone"
                placeholder={footerData.formPlaceholders.phone}
                value={formData.phone}
                onChange={handleChange}
                className="footer-input"
                aria-label="Phone"
              />
              <button type="submit" className="footer-submit-btn">
                {messageSent ? 'Message Sent!' : footerData.formButtonText}
              </button>
            </form>
          </div>
        </div>

        {/* Tapered Center-Thick Separator Line */}
        <div className="footer-tapered-line" aria-hidden="true"></div>

        {/* Watermark Brand Text with Gradient Half-Fade Effect */}
        <div className="footer-watermark" aria-hidden="true">
          <span className="footer-watermark-text">{footerData.watermarkText}</span>
        </div>
      </div>
    </footer>
  );
};
