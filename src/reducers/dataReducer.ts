import { IProducts, IAction } from '../interfaces';
import { FETCH_PRODUCTS } from '../types/index';

const initialState: IProducts = { products: [] };

export const dataReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
