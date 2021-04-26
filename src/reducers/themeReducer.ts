import { THEME_TOGGLE } from '../types';
import { IAction, IThemeState } from '../interfaces';

const initialState: IThemeState = {
  isLight: true,
};

export const themeReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return { ...state, isLight: action.payload };
    default:
      return state;
  }
};
