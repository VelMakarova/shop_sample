import { THEME_TOGGLE } from '../types';
import { Action, ThemeState } from '../interfaces';

const initialState: ThemeState = {
  isLight: true,
};

export const themeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return { ...state, isLight: action.payload };
    default:
      return state;
  }
};
