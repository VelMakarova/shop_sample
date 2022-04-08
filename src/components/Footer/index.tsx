import React from "react";
import { FormattedMessage } from "react-intl";
import { FaInstagram, FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-nav">
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              <FormattedMessage id="footer_nav_advantages" />
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              <FormattedMessage id="footer_nav_payments" />
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              <FormattedMessage id="footer_nav_cooperation" />
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="/" className="footer-nav-link">
              <FormattedMessage id="footer_nav_contacts" />
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
        <div className="footer-info">
          &#169;
          {date}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
