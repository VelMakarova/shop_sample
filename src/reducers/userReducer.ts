import {
  UPDATE_USER,
  SIGNOUT_USER,
  LOGIN_USER,
  FETCH_USER,
  FETCH_CART_DATA,
  REMOVE_FROM_CART,
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  TOGGLE_FAV
} from '../types';


const initialState = { user: {} };

const removeUser = (prevState: any) => {
  const newState = initialState;
  return { ...prevState, ...newState };
};

const updateCart = (prevState: any, action: any) => {
  const newState = prevState.user;
  newState.userCart = action.payload;
  return { ...prevState, user: newState };
};

const updateFavs = (prevState: any, action: any) => {
  const newState = prevState.user;
  newState.userFavs = action.payload;
  return { ...prevState, user: newState.userFavs };
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: { ...action.payload } };
    case FETCH_USER:
      return { ...state, user: { ...action.payload } };
    case UPDATE_USER:
      return { ...state, user: { ...action.payload } };
    case SIGNOUT_USER:
      return removeUser(state);
    case REMOVE_FROM_CART:
      return updateCart(state, action);
    case INCREASE_QUANTITY:
      return updateCart(state, action);
    case DECREASE_QUANTITY:
      return updateCart(state, action);
    case ADD_TO_CART:
      return updateCart(state, action);
    case FETCH_CART_DATA:
      return updateCart(state, action);
    case TOGGLE_FAV: 
      return updateFavs(state, action)
    default:
      return state;
  }
};
