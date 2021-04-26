import { IFavs, IAction } from '../interfaces';
import { FETCH_FAV_DATA } from '../types/index';

const initialState: IFavs = { favs: [] };

export const favsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_FAV_DATA:
      return { ...state, favs: action.payload };
    default:
      return state;
  }
};
