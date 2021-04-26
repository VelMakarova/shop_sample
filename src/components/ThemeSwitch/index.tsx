import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../actions';
import { RootState } from '../../reducers/rootReducer';

const ThemeSwitch: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.isLight);
  const dispatch = useDispatch();
  const themeSwitchHandler = () => {
    dispatch(switchTheme(!isLight));
  };
  return (
    <div
      className={`theme-switch ${isLight ? '' : 'is-dark'}`}
      onClick={() => {
        themeSwitchHandler();
      }}
    >
      <div className="theme-switch-check"></div>
    </div>
  );
};

export default ThemeSwitch;
