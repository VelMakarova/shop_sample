import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NAVIGATIONS } from '../../constants/navigations';
import routes from '../../constants/routes';
import { RootState } from '../../reducers/rootReducer';

const Nav: React.FC = () => {
  const { language } = useSelector((state: RootState) => state.language);
  const currentLanguagePack = NAVIGATIONS.find(
    (item) => item.language === language
  );

  const navItems = () => {
    return currentLanguagePack?.items.map((item: string, index: number) => (
      <li key={index} className="nav-item">
        <Link to={routes.INDEX} className="nav-link">
          {item}
        </Link>
      </li>
    ));
  };

  return (
    <nav className="nav">
      <ul className="nav-list">{navItems()}</ul>
    </nav>
  );
};

export default Nav;
