import { IS_MOBILE, IS_DESKTOP } from '../types';
import { IResponsiveState, IAction } from '../interfaces/index';

const initialState: IResponsiveState = {
  isMobile: false,
};

export const responsiveReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case IS_MOBILE:
      return { ...state, isMobile: action.payload };
    case IS_DESKTOP:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
};
