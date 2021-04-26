import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';

interface LayoutProps {
  children: any;
}

const LoginLayout: React.FC<LayoutProps> = (props: any) => {
  const isLight = useSelector((state: RootState) => state.theme.isLight);
  const themeClass = isLight ? 'theme-light' : 'theme-dark';
  return (
    <div className={`theme-container ${themeClass}`}>
      <div className="page-container login-container">{props.children}</div>
    </div>
  );
};

export default LoginLayout;
