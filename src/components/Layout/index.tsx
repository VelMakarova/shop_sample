import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowUp } from "react-icons/fa";
import { isMobileToggle } from "../../store/ui/actions";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import MobileMenu from "../MobileMenu";
import { RootState } from "../../store/rootReducer";

interface LayoutProps {
  children: React.ReactChild;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const win: Window = window;
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.uiSettings.isMobile);
  const isDark = useSelector(
    (state: RootState) => state.uiSettings.isDarkTheme
  );
  const themeClass: string = isDark ? "theme-dark" : "theme-light";
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLinkVisible, setIsLinkVisible] = useState<boolean>(true);

  const setIsMobile = useCallback(() => {
    if (window.innerWidth < 768) {
      dispatch(isMobileToggle(true));
    } else {
      dispatch(isMobileToggle(false));
    }
  }, [dispatch]);

  const scrollTop = (): void => {
    document.documentElement.scrollTop = 0;
  };

  const showLinkToTop = useCallback(() => {
    if (document.documentElement.scrollTop > 100) {
      setIsLinkVisible(true);
    } else {
      setIsLinkVisible(false);
    }
  }, []);

  useEffect(() => {
    win.addEventListener("scroll", showLinkToTop);
    return () => win.removeEventListener("scroll", showLinkToTop);
  }, [showLinkToTop, win]);

  useEffect(() => {
    setIsMobile();
    win.addEventListener("resize", setIsMobile);
    return () => {
      win.removeEventListener("resize", setIsMobile);
    };
  }, [setIsMobile, win]);

  return (
    <div className={`theme-container ${themeClass}`}>
      <div className="page-container">
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
        {isMobile ? <MobileMenu isMenuOpen={isMenuOpen} /> : <Nav />}
        {children}
        <Footer />
      </div>
      {isLinkVisible && (
        <button
          type="button"
          className="link-to-top has-icon"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Layout;
