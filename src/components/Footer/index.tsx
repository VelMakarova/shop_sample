import React from 'react';
import { FaInstagram, FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              Our Advantages
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              Payment and Delivery
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              Cooperation
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              Contacts
            </a>
          </li>
        </ul>
        <ul className="footer-social">
          <li className="footer-social-item">
            <a href="/" className="footer-social-link has-icon">
              <FaFacebook />
            </a>
          </li>
          <li className="footer-social-item">
            <a href="/" className="footer-social-link has-icon">
              <FaTwitter />
            </a>
          </li>
          <li className="footer-social-item">
            <a href="/" className="footer-social-link has-icon">
              <FaInstagram />
            </a>
          </li>
          <li className="footer-social-item">
            <a href="/" className="footer-social-link has-icon">
              <FaGoogle />
            </a>
          </li>
        </ul>
        <div className="footer-info">&#169; 2020</div>
      </div>
    </footer>
  );
};

export default Footer;
