import React, { useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Empty from "./pages/Empty";
import Favorites from "./pages/Favorites";
import Product from "./pages/Product";
import User from "./pages/User";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Section from "./pages/Section";
import routes from "./navigation/routes";

export const history = createBrowserHistory();

const MainRouter = () => {
  useEffect(() => {
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      history.push(routes.INDEX);
    } else {
      history.push(routes.LOGIN_ROUTE);
    }
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path={routes.USER_ROUTE} component={User} />
        <Route path={routes.SIGNUP_ROUTE} component={Register} />
        <Route path={routes.LOGIN_ROUTE} component={Login} />
        <Route path={routes.FAV_ROUTE} component={Favorites} />
        <Route path={routes.CART_ROUTE} component={Cart} />
        <Route path={`${routes.SECTION_ROUTE}/:section`} component={Section} />
        <Route path={`${routes.PRODUCTS_ROUTE}/:id`} component={Product} />
        <Route path={routes.INDEX} exact component={Main} />
        <Route component={Empty} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
