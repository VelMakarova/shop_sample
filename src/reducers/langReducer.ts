import { SHOW_ENG, SHOW_RUS } from '../types';
import { ENG } from '../constants/languages';
import { LangState, Action } from '../interfaces/index';

const initialState: LangState = {
  language: ENG,
};

export const langReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SHOW_ENG:
      return { ...state, language: action.payload };
    case SHOW_RUS:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
