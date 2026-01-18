import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Medicine Finder</h3>
          <p>Your trusted companion for finding the right medicines</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>Drug Search</li>
            <li>Pharmacy Locator</li>
            <li>Drug Interactions</li>
            <li>Health Advice</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Medicine Finder. All rights reserved. | Disclaimer: Please consult a doctor before taking any medicine.</p>
      </div>
    </footer>
  );
};

export default Footer;
