import Language from "../constants/language";

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  price: number;
  discount: number;
  img: string;
  category: string;
}

export interface CartProduct {
  id: number;
  productId: number;
  name: string;
  manufacturer: string;
  description: string;
  price: number;
  discount: number;
  img: string;
  quantity: number;
}

export interface User {
  email: string;
  password: string;
  userLastName: string;
  userName: string;
  userFavs: Product[];
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

export interface UISettings {
  language: Language;
  isDarkTheme: boolean;
  isMobile: boolean;
}

export interface BaseAction<P = undefined, T = string> {
  type: T;
  payload: P;
}

export interface Auth {
  errorMessage: string;
}
