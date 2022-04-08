import React from "react";
import NavLink from "./NavLink";
import NAVIGATION from "../../constants/navigation";

const Nav: React.FC = () => {
  const renderNavigation = () => {
    return NAVIGATION.map((navItem: string) => {
      return <NavLink key={navItem} categoryName={navItem} />;
    });
  };
  return (
    <nav className="nav">
      <ul className="nav-list">{renderNavigation()}</ul>
    </nav>
  );
};

export default Nav;
