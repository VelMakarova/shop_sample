import { IS_MOBILE, IS_DESKTOP } from '../types';
import { ResponsiveState, Action } from '../interfaces/index';

const initialState: ResponsiveState = {
  isMobile: false,
};

export const responsiveReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case IS_MOBILE:
      return { ...state, isMobile: action.payload };
    case IS_DESKTOP:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
};
