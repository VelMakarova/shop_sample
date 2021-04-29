import React, { useEffect, useCallback, useState, useRef, MutableRefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowUp } from 'react-icons/fa';
import { isMobileToggle } from '../../actions';
import { IS_MOBILE, IS_DESKTOP } from '../../types';
import Header from '../Header';
import Nav from '../Nav';
import Footer from '../Footer';
import MobileMenu from '../MobileMenu';
import { RootState } from '../../reducers/rootReducer';

interface LayoutProps {
  children: React.ReactChild;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state: RootState) => state.isMobile);
  const isLight = useSelector((state: RootState) => state.theme.isLight);
  const themeClass: string = isLight ? 'theme-light' : 'theme-dark';
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  let isLinkVisible = useRef<boolean>(false);

  const setIsMobile = useCallback(() => {
    if (window.innerWidth < 768) {
      dispatch(isMobileToggle(IS_MOBILE, true));
    } else {
      dispatch(isMobileToggle(IS_DESKTOP, false));
    }
  }, [dispatch]);

  const showLinkToTop = useCallback((e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    if(scrollTop > 100) {
      isLinkVisible.current = false;
    } else {
      isLinkVisible.current = true;
    }
  }, [])

  useEffect(() => {
    setIsMobile();
    window.addEventListener('resize', setIsMobile);
    return () => {
      window.removeEventListener('resize', setIsMobile);
    };
  }, [setIsMobile]);

  useEffect(() => {
    window.addEventListener('scroll', showLinkToTop);
    return () => {
      window.removeEventListener('scroll', showLinkToTop);
    }
  }, [])

  return (
    <div className={`theme-container ${themeClass}`}>
      <div className="page-container">
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
        {isMobile ? <MobileMenu isMenuOpen={isMenuOpen} /> : <Nav />}
        {props.children}
        <Footer />
      </div>
      <a href="#header" className={`link-to-top has-icon ${isLinkVisible ? '' : 'is-hidden'}`}>
        <FaArrowUp />
      </a>
    </div>
  );
};

export default Layout;
