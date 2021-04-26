import * as ReduxTypes from '../types';
import { history } from '../Router';
import { BASE_URL } from '../constants/database';
import routes from '../constants/routes';
import * as types from '../interfaces';

const USER_PATH = `${BASE_URL}${routes.USER_ROUTE}`;

export function switchLanguage(type: string, language: string) {
  return {
    type: type,
    payload: language,
  };
}

export function switchTheme(theme: boolean) {
  return {
    type: ReduxTypes.THEME_TOGGLE,
    payload: theme,
  };
}

export function isMobileToggle(type: string, value: boolean) {
  return {
    type: type,
    payload: value,
  };
}

export function fetchData(type: string, path: string) {
  return async (dispatch: (arg: types.DataAction) => void): Promise<void> => {
    const response = await fetch(path);
    const json = await response.json();
    dispatch({ type: type, payload: json });
  };
}

export function changeQuantity(type: string, id: number) {
  return async (dispatch: (arg: types.QuantityAction) => void): Promise<void> => {
    const user = await (await fetch(USER_PATH)).json();
    const cartArray = user.userCart;
    const cartItem = cartArray.find(
      (item: types.CartProduct) => item.productId === id
    );
    if (type === ReduxTypes.INCREASE_QUANTITY) {
      ++cartItem.productQuantity;
      const response = await (
        await fetch(USER_PATH, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ userCart: cartArray }),
        })
      ).json();
      dispatch({ type: ReduxTypes.INCREASE_QUANTITY, payload: response.userCart });
      const newUser = await (await fetch(USER_PATH)).json();
      dispatch({ type: ReduxTypes.FETCH_USER, payload: newUser });
    } else if (type === ReduxTypes.DECREASE_QUANTITY) {
      --cartItem.productQuantity;
      const response = await (
        await fetch(USER_PATH, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ userCart: cartArray }),
        })
      ).json();

      dispatch({ type: ReduxTypes.DECREASE_QUANTITY, payload: response.userCart });
      const newUser = await (await fetch(USER_PATH)).json();
      dispatch({ type: ReduxTypes.FETCH_USER, payload: newUser });
    }
  };
}

export function addToCart(item: types.Product, id: number) {
  debugger
  return async (dispatch: (arg: types.AddCartAction) => void): Promise<void> => {
    const user = await (await fetch(USER_PATH)).json();
    const cartArray = user.userCart;
    const cartItem = cartArray.find(
      (item: types.CartProduct) => item.productId === id
    );
    if (cartItem) {
      ++cartItem.productQuantity;
      const response = await fetch(USER_PATH, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ userCart: cartArray }),
      });
      const json = await response.json();
      dispatch({ type: ReduxTypes.INCREASE_QUANTITY, payload: json });
      const newUser = await (await fetch(USER_PATH)).json();
      dispatch({ type: ReduxTypes.FETCH_USER, payload: newUser });
    } else {
      const newCartItem = {
        productName: item.productName,
        productManufacturer: item.productManufacturer,
        productDescription: item.productDescription,
        productPrice: item.productPrice,
        productDiscount: item.productDiscount,
        productImg: item.productImg,
        productQuantity: 1,
        productId: id,
      };
      cartArray.push(newCartItem);
      const response = await fetch(USER_PATH, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ userCart: cartArray }),
      });
      const json = await response.json();
      dispatch({ type: ReduxTypes.ADD_TO_CART, payload: json.userCart });
      const newUser = await (await fetch(USER_PATH)).json();
      dispatch({ type: ReduxTypes.FETCH_USER, payload: newUser });
    }
  };
}

export function removeFromCart(id: number) {
  return async (dispatch: (arg: types.RemoveCartAction) => void): Promise<void> => {
    const user = await (await fetch(USER_PATH)).json();
    const cart = user.userCart;
    const index = cart.findIndex((item: types.CartProduct) => item.productId === id);
    cart.splice(index, 1);
    const response = await fetch(USER_PATH, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ userCart: cart }),
    });
    dispatch({ type: ReduxTypes.REMOVE_FROM_CART, payload: cart });
    const newUser = await (await fetch(USER_PATH)).json();
    dispatch({ type: ReduxTypes.FETCH_USER, payload: newUser });
  };
}

export function toggleFavorites(item: types.Product) {
  return async (dispatch: (arg: types.FavsToggleAction)=> void): Promise<void> => {
    const user = await (await fetch(USER_PATH)).json();
    const favsArray = user.userFavs;
    const favItem = favsArray.find(
      (favsArrayItem: types.CartProduct) => favsArrayItem.productId === item.id
    );
    if (favItem) {
      const index = favsArray.findIndex(
        (favsitem: types.CartProduct) => favsitem.productId === item.id
      );
      favsArray.splice(index, 1);
      const response = await (
        await fetch(USER_PATH, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ userFavs: favsArray }),
        })
      ).json();
      dispatch({ type: ReduxTypes.TOGGLE_FAV, payload: response.userFavs });
      const newUser = await (await fetch(USER_PATH)).json();
      dispatch({ type: ReduxTypes.FETCH_USER, payload: newUser });
    } else {
      const newFavItem = {
        productName: item.productName,
        productManufacturer: item.productManufacturer,
        productDescription: item.productDescription,
        productPrice: item.productPrice,
        productDiscount: item.productDiscount,
        productImg: item.productImg,
        productQuantity: 1,
        productId: item.id,
      };
      favsArray.push(newFavItem);
      const response = await (
        await fetch(USER_PATH, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ userFavs: favsArray }),
        })
      ).json();
      dispatch({ type: ReduxTypes.TOGGLE_FAV, payload: response.userFavs });
      const newUser = await (await fetch(USER_PATH)).json();
      dispatch({ type: ReduxTypes.FETCH_USER, payload: newUser });
    }
  };
}

export function registerUser(user: types.User) {
  debugger
  return async (dispatch: (arg: types.RegisterAction) => void): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}${routes.REGISTER_ROUTE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
          userName: user.userName,
          userLastName: user.userLastName,
          userCart: user.userCart,
          userFavs: user.userFavs,
          userLanguage: user.userLanguage,
        }),
      });
      const json = await response.json();
      if (response.status === 201) {
        const getUser = await fetch(
          `${BASE_URL}${routes.USERS_ROUTE}?email=${user.email}`
        );
        const getUserListParsed = await getUser.json();
        const getUserParsed = getUserListParsed[0];
        const userResponse = await fetch(USER_PATH, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            email: getUserParsed.email,
            password: getUserParsed.password,
            userName: getUserParsed.userName,
            userLastName: getUserParsed.userLastName,
            userCart: getUserParsed.userCart,
            userFavs: getUserParsed.userFavs,
            userLanguage: getUserParsed.userLanguage,
            accessToken: json.accessToken,
            userId: getUserParsed.id,
          }),
        });
        const userParsed = await userResponse.json();
        dispatch({ type: ReduxTypes.LOGIN_USER, payload: userParsed });
        history.push(routes.INDEX);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function loginUser(user: any) {
  return async (dispatch: (arg: types.LoginAction) => void): Promise<void> => {
    try {
      const response = await fetch(`${BASE_URL}${routes.LOGIN_ROUTE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
      const json = await response.json();
      localStorage.setItem('accessToken', json.accessToken);
      if (response.ok) {
        const getUser = await fetch(
          `${BASE_URL}${routes.USERS_ROUTE}?email=${user.email}`
        );
        const getUserListParsed = await getUser.json();
        const getUserParsed = getUserListParsed[0];
        const userResponse = await fetch(USER_PATH, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            email: getUserParsed.email,
            password: getUserParsed.password,
            userName: getUserParsed.userName,
            userLastName: getUserParsed.userLastName,
            userCart: getUserParsed.userCart,
            userFavs: getUserParsed.userFavs,
            userLanguage: getUserParsed.userLanguage,
            accessToken: json.accessToken,
            userId: getUserParsed.id,
          }),
        });
        const userParsed = await userResponse.json();
        dispatch({ type: ReduxTypes.LOGIN_USER, payload: userParsed });
        history.push(routes.INDEX);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchUser() {
  return async (dispatch: (arg: types.FetchUserAction) => void): Promise<void> => {
    const response = await fetch(USER_PATH);
    const json = await response.json();
    dispatch({ type: ReduxTypes.FETCH_USER, payload: json });
  };
}

export function signoutUser() {
  return async (dispatch: (arg: types.SignoutAction) => void): Promise<void> => {
    const getUserResponse = await fetch(USER_PATH);
    const getUserResponseParse = await getUserResponse.json();
    const setUserData = await fetch(
      `${BASE_URL}${routes.USERS_ROUTE}/${getUserResponseParse.userId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          userCart: getUserResponseParse.userCart,
          userFavs: getUserResponseParse.userFav,
          userLanguage: getUserResponseParse.userLanguage,
        }),
      }
    );
    const response = await fetch(USER_PATH, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        email: '',
        password: '',
        userName: '',
        userLastName: '',
        userCart: [],
        userFavs: [],
        userLanguage: '',
        accessToken: '',
      }),
    });
    const json = await response.json();
    dispatch({ type: ReduxTypes.SIGNOUT_USER, payload: json });
    window.localStorage.removeItem('accessToken');
    history.push(routes.LOGIN_ROUTE);
  };
}

export function fetchUserData(type: string, dataKey: string) {
  return async (dispatch: (arg: types.FetchUserDataAction) => void): Promise<void> => {
    const response = await fetch(USER_PATH);
    const json = await response.json();
    const data = json[dataKey];
    dispatch({ type: type, payload: data });
  };
}
