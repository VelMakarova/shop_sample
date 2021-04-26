/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import MainRouter from './Router';
import { useDispatch } from 'react-redux';
import { fetchData, fetchUser, fetchUserData } from './actions';
import { FETCH_PRODUCTS, FETCH_CART_DATA, FETCH_FAV_DATA } from './types';
import { BASE_URL } from './constants/database';
import routes from './constants/routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      dispatch(fetchUser());
    }
    dispatch(fetchData(FETCH_PRODUCTS, `${BASE_URL}${routes.PRODUCTS_ROUTE}`));
  }, []);

  return <MainRouter />;
};

export default App;
