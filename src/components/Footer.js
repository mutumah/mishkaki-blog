import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="footer-wrapper">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Navigation Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/recipes" className="footer-link">Recipes</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="footer-social">
              <a href="https://instagram.com/mishkakiblog" target="_blank" rel="noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://youtube.com/mishkakiblog" target="_blank" rel="noreferrer" className="social-link">
                YouTube
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="newsletter-text">Subscribe to our newsletter for the latest recipes and updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Mishkaki Blog. All rights reserved.</p>
          <div className="footer-terms">
            <button className="terms-link" onClick={() => alert('Terms of Service')}>Terms of Service</button>
            <button className="terms-link" onClick={() => alert('Cookie Policy')}>Cookie Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
