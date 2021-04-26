import React from 'react';

import LanguageSwitch from '../LanguageSwitch';
import ThemeSwitch from '../ThemeSwitch';
import Nav from '../Nav';

interface MobileMenuProps {
  isMenuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen }) => {
  return (
    <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
      <div className="mobile-menu-content">
        <div className="mobile-menu-controls">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default MobileMenu;
