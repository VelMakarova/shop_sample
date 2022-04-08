import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

interface LayoutProps {
  children: React.ReactChild;
}

const LoginLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkTheme } = useSelector((state: RootState) => state.uiSettings);
  const themeClass = isDarkTheme ? "theme-dark" : "theme-light";

  return (
    <div className={`theme-container ${themeClass}`}>
      {/* {error ? <div className="common-error-container">{error}</div> : null} */}
      <div className="page-container login-container">{children}</div>
    </div>
  );
};

export default LoginLayout;
