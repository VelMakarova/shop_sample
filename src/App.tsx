import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainRouter from "./Router";
import fetchAllProducts from "./store/products/actions";
import { setUser } from "./store/user/actions";
import BASE_URL from "./api";
import routes from "./navigation/routes";
import { initCart } from "./store/cart/actions";
import IntlProviderWrapper from "./components/IntlProviderWrapper/IntlProviderWrapper";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const email = String(localStorage.getItem("userMail"));
    if (token) {
      dispatch(setUser(email));
      dispatch(initCart());
      dispatch(fetchAllProducts(`${BASE_URL}${routes.PRODUCTS_ROUTE}`));
    }
  }, []);

  return (
    <IntlProviderWrapper>
      <MainRouter />
    </IntlProviderWrapper>
  );
};

export default App;
