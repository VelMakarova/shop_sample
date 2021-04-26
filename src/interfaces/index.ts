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

export interface IProduct {
  id: number;
  productName: string;
  productManufacturer: string;
  productDescription: string;
  productPrice: number;
  productDiscount: number;
  productImg: string;
  productCategory: string;
}

export interface IProducts {
  products: IProduct[];
}

export interface IFavs {
  favs: IProduct[];
}

export interface CartProducts {
  cart: CartProduct[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IThemeState {
  isLight: boolean;
}

export interface ILangState {
  language: string;
}

export interface IResponsiveState {
  isMobile: boolean;
}

export interface User {
  email: string;
  password: string;
  userName: string;
  userLastName: string;
  userCart: CartProduct[];
  userFavs: [];
  userLanguage: string;
}

export interface IRegisterForm {
  email: string;
  password: string;
  confirmPass: string;
  userName: string;
  userLastName: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}
