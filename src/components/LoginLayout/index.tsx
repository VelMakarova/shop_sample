import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';

interface LayoutProps {
  children: React.ReactChild;
}

const LoginLayout: React.FC<LayoutProps> = (props) => {
  const { error } = useSelector((state: RootState) => state.error);
  const isLight = useSelector((state: RootState) => state.theme.isLight);
  const themeClass = isLight ? 'theme-light' : 'theme-dark';

  return (
    <div className={`theme-container ${themeClass}`}>
      {error ? <div className="common-error-container">{error}</div> : null}
      <div className="page-container login-container">{props.children}</div>
    </div>
  );
};

export default LoginLayout;
