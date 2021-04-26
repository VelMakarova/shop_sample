import * as reduxTypes from '../types';


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
    case reduxTypes.LOGIN_USER:
      return { ...state, user: { ...action.payload } };
    case reduxTypes.FETCH_USER:
      return { ...state, user: { ...action.payload } };
    case reduxTypes.UPDATE_USER:
      return { ...state, user: { ...action.payload } };
    case reduxTypes.SIGNOUT_USER:
      return removeUser(state);
    case reduxTypes.REMOVE_FROM_CART:
      return updateCart(state, action);
    case reduxTypes.INCREASE_QUANTITY:
      return updateCart(state, action);
    case reduxTypes.DECREASE_QUANTITY:
      return updateCart(state, action);
    case reduxTypes.ADD_TO_CART:
      return updateCart(state, action);
    case reduxTypes.FETCH_CART_DATA:
      return updateCart(state, action);
    case reduxTypes.TOGGLE_FAV: 
      return updateFavs(state, action)
    default:
      return state;
  }
};
