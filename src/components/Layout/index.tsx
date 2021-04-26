/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isMobileToggle } from '../../actions';
import { IS_MOBILE, IS_DESKTOP } from '../../types';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';
import { RootState } from '../../reducers/rootReducer';

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = (props: any) => {
  const { isMobile } = useSelector((state: RootState) => state.isMobile);
  const dispatch = useDispatch();
  const isLight = useSelector((state: RootState) => state.theme.isLight);
  const themeClass = isLight ? 'theme-light' : 'theme-dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setIsMobile = useCallback(() => {
    if (window.innerWidth < 768) {
      dispatch(isMobileToggle(IS_MOBILE, true));
    } else {
      dispatch(isMobileToggle(IS_DESKTOP, false));
    }
  }, [dispatch]);

  useEffect(() => {
    setIsMobile();
    window.addEventListener('resize', setIsMobile);
    return () => {
      window.removeEventListener('resize', setIsMobile);
    };
  }, [setIsMobile]);

  return (
    <div className={`theme-container ${themeClass}`}>
      <div className="page-container">
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
        {isMobile ? <MobileMenu isMenuOpen={isMenuOpen} /> : <Nav />}
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
