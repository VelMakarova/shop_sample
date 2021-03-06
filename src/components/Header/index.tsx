import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMenuOutline, IoEllipsisHorizontal } from "react-icons/io5";
import { RootState } from "../../store/rootReducer";
import LanguageSwitch from "../LanguageSwitch";
import Logo from "../Logo";
import Subnav from "../Subnav";
import ThemeSwitch from "../ThemeSwitch";

interface HeaderProps {
  setMenuOpen: (args: boolean) => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ setMenuOpen, isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useSelector((state: RootState) => state.uiSettings.isMobile);
  const isOpenClass = isOpen ? "is-open" : "";

  return (
    <header className="header" id="header">
      <div className="header-content">
        {isMobile ? null : (
          <div className="header-controls">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
        )}
        {isMobile ? (
          <button
            type="button"
            className="menu-toggle has-icon"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <IoMenuOutline />
          </button>
        ) : null}
        <Logo />
        {isMobile ? (
          <div className="subnav-toggler">
            <button
              type="button"
              className="subnav-toggler-btn has-icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoEllipsisHorizontal />
            </button>
            <div className={`subnav-dropdown ${isOpenClass}`}>
              <Subnav />
            </div>
          </div>
        ) : (
          <Subnav />
        )}
      </div>
    </header>
  );
};

export default Header;
