import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Abdeta Bayissa</h3>
            <p>Computer Science Student & Programming Enthusiast</p>
            <p>Building the future, one line of code at a time.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://Github.com/ABDOO_430" className="footer-social-link">GitHub</a>
              <a href="https://Linkedin.com/ABDOO_430" className="footer-social-link">LinkedIn</a>
              <a href="https://TELEGRAM.COM/ABDOO_430" className="footer-social-link">Telegram</a>
             
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Education</h4>
            <p><strong>Madda Walabu University</strong></p>
            <p>Computer Science</p>
            <p>3rd Year Student</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Abdeta Bayissa. All rights reserved.</p>
            <p>@2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;