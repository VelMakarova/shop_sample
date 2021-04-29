/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { fetchUser, fetchUserData, addToCart } from '../../actions';
import Layout from '../../components/Layout';
import routes from '../../constants/routes';
import { ADD_TO_CART } from '../../constants/btns';
import { RootState } from '../../reducers/rootReducer';
import { Product } from '../../interfaces/index';
import { FETCH_FAV_DATA } from '../../types/index';

const Favorites = () => {
  const dispatch = useDispatch();
  const favs = useSelector((state: RootState) => state.user.user.userFavs);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchUserData(FETCH_FAV_DATA, 'userFavs'));
  }, []);

  const addToCartHandler = (id: number) => {
    let targetElement = favs.find((item: Product) => item.id === id)[0];
    dispatch(addToCart(targetElement, id));
  };

  const productsItems = () => {
    return favs?.map((item: Product, index: number) => {
      const discountPrice =
        item.productPrice - item.productPrice * (item.productDiscount / 100);
        const isFav = favs?.find((favItem: Product) => favItem.id === item.id);
      return (
        <li key={index} className="card-item">
          <Link
            to={`${routes.PRODUCT_ROUTE}/${item.id}`}
            className="card-link"
          />
          <button
            className={`card-to-fav has-icon ${
              isFav ? 'is-active' : ''
            }`}
          >
            <FaHeart />
          </button>
          <div className="card-img">
            <img className="img" src={item.productImg} alt={item.productName} />
          </div>
          <div className="card-info">
            <div className="card-name text-truncate">{item.productName}</div>
            <div className="card-manufacturer text-truncate">
              {item.productManufacturer}
            </div>
            <div className="card-price">
              {item.productDiscount !== 0 ? (
                <>
                  <div className="card-old-price text-truncate">{`${item.productPrice}$`}</div>
                  <div className="card-actual-price text-truncate">{`${discountPrice}$`}</div>
                </>
              ) : (
                <div className="card-actual-price text-truncate">{`${item.productPrice}$`}</div>
              )}
            </div>
            <button
              className="card-to-cart"
              onClick={() => addToCartHandler(item.id)}
            >
              {ADD_TO_CART}
            </button>
          </div>
        </li>
      );
    });
  };

  return (
    <Layout>
      <main className="main">
        <div className="favorites">
          <ul className="favorites-list">{productsItems()}</ul>
        </div>
      </main>
    </Layout>
  );
};

export default Favorites;
