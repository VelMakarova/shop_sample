import * as types from '../types/index';

const initialState = { error: '' };

export const errorReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case types.USER_ALREADY_EXIST:
      return { ...state, error: action.payload };
    case types.WRONG_CREDENTIALS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
