export interface CartProduct {
  productName: string;
  productManufacturer: string;
  productDescription: string;
  productPrice: number;
  productDiscount: number;
  productImg: string;
  productQuantity: number;
  productId: number;
}

export interface Product {
  id: number;
  productName: string;
  productManufacturer: string;
  productDescription: string;
  productPrice: number;
  productDiscount: number;
  productImg: string;
  productCategory: string;
}

export interface Products {
  products: Product[];
}

export interface User {
  email: string,
  password: string,
  userCart: CartProduct[],
  userFavs: Product[],
  userLanguage: string,
  userLastName: string,
  userName: string
}

export interface Action {
  type: string;
  payload: any
}

export interface IFavs {
  favs: Product[];
}

export interface CartProducts {
  cart: CartProduct[];
}

export interface DataAction {
  type: string;
  payload: any;
}

export interface QuantityAction {
  type: string;
  payload: any;
}

export interface AddCartAction {
  type: string;
  payload: CartProduct;
}

export interface RemoveCartAction {
  type: string;
  payload: CartProduct;
}

export interface FavsToggleAction {
  type: string;
  payload: any;
}

export interface RegisterAction {
  type: string;
  payload: any;
}

export interface LoginAction {
  type: string;
  payload: any;
}

export interface FetchUserAction {
  type: string;
  payload: any;
}

export interface SignoutAction {
  type: string;
  payload: any;
}

export interface FetchUserDataAction {
  type: string;
  payload: any;
}

export interface ThemeState {
  isLight: boolean;
}

export interface LangState {
  language: string;
}

export interface ResponsiveState {
  isMobile: boolean;
}

export interface User {
  email: string;
  password: string;
  userName: string;
  userLastName: string;
  userCart: CartProduct[];
  userFavs: Product[];
  userLanguage: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPass: string;
  userName: string;
  userLastName: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
