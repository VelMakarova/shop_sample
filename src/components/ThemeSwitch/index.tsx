import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../store/ui/actions";
import { RootState } from "../../store/rootReducer";

const ThemeSwitch: React.FC = () => {
  const isDark = useSelector(
    (state: RootState) => state.uiSettings.isDarkTheme
  );
  const dispatch = useDispatch();
  const themeSwitchHandler = () => {
    dispatch(switchTheme(!isDark));
  };
  return (
    <button
      type="button"
      className={`theme-switch ${isDark ? "is-dark" : ""}`}
      onClick={() => {
        themeSwitchHandler();
      }}
    >
      <div className="theme-switch-check" />
    </button>
  );
};

export default ThemeSwitch;
