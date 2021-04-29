import React, { useEffect, useState } from 'react'; 
import { Router, Switch, Route } from 'react-router';
import Main from './layouts/Main';
import Cart from './layouts/Cart';
import Empty from './layouts/Empty';
import Favorites from './layouts/Favorites';
import Product from './layouts/Product';
import User from './layouts/User';
import Login from './layouts/Login';
import Register from './layouts/Register';
import routes from './constants/routes';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const MainRouter = () => {

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      history.push(routes.INDEX);
    } else {
      history.push(routes.LOGIN_ROUTE)
    }
  })

  return (    
    <Router history={history}>
      <Switch>
        <Route path={routes.USER_ROUTE} component={User} />
        <Route path={routes.SIGNUP_ROUTE} component={Register} />
        <Route path={routes.LOGIN_ROUTE} component={Login} />
        <Route path={routes.FAV_ROUTE} component={Favorites} />
        <Route path={routes.CART_ROUTE} component={Cart} />
        <Route path={`${routes.PRODUCT_ROUTE}/:id`} component={Product} />
        <Route path={routes.INDEX} exact component={Main} />
        <Route component={Empty} />
      </Switch>
    </Router>
    )
};

export default MainRouter;
