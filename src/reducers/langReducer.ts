import { SHOW_ENG, SHOW_RUS } from '../types';
import { ENG } from '../constants/languages';
import { ILangState, IAction } from '../interfaces/index';

const initialState: ILangState = {
  language: ENG,
};

export const langReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SHOW_ENG:
      return { ...state, language: action.payload };
    case SHOW_RUS:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
