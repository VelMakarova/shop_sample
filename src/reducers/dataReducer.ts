import { Products, DataAction } from '../interfaces';
import { FETCH_PRODUCTS } from '../types/index';

const initialState: Products = { products: [] };

export const dataReducer = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
