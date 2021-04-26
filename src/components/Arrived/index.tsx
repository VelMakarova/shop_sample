import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { ADD_TO_CART, VIEW_LESS, VIEW_MORE } from '../../constants/btns';
import SECTION_TITLES from '../../constants/sectionsTitles';
import { ITEMS_AMOUNT } from '../../constants/settings';
import routes from '../../constants/routes';
import { addToCart, toggleFavorites, fetchUser, fetchUserData } from '../../actions';
import { Product } from '../../interfaces';
import { RootState } from '../../reducers/rootReducer';
import { FETCH_FAV_DATA } from '../../types';

const Arrived: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const { products } = useSelector((state: RootState) => state.products);
  const favs = useSelector((state: RootState) => state.user.user.userFavs);
  const [shownItemsAmount, showAll] = useState(false);
  const [favsArr, setFavsArr] = useState([]);
  const amount = shownItemsAmount ? products.length : ITEMS_AMOUNT;
  const viewBtnContent = shownItemsAmount ? VIEW_LESS : VIEW_MORE;

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchUserData(FETCH_FAV_DATA, 'userFavs'));
  }, [dispatch])

  const addToCartHandler = (id: number) => {
    const targetElement = products.findIndex((item: Product) => item.id === id);
    dispatch(addToCart(targetElement, id));
  };

  const toggleFavHandler = (item: Product) => {
    dispatch(toggleFavorites(item));
    dispatch(fetchUser())
  };

  const productsItems = () => {
    return products?.slice(0, amount).map((item: Product) => {
      const isFav = favs?.find((favItem: any) => favItem.productId === item.id);
      return (
        <li key={item.id} className="card-item">
          <Link
            to={`${routes.PRODUCT_ROUTE}/${item.id}`}
            className="card-link"
          />
          <button
            className={`card-to-fav has-icon ${
              isFav ? 'is-active' : ''
            }`}
            onClick={() => toggleFavHandler(item)}
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
              <div className="card-actual-price text-truncate">
                {`${item.productPrice}$`}
              </div>
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

  const getTitle = () => {
    const currentLangData = SECTION_TITLES.find(
      (item) => item.language === language
    );
    return currentLangData?.arrivedTitle;
  };

  return (
    <div className="cards arrived">
      <div className="cards-content">
        <div className="cards-title">{getTitle()}</div>
        <ul className="cards-list">{productsItems()}</ul>
        {products?.length > 8 ? (
          <button
            className="card-shown-btn"
            onClick={() => showAll(!shownItemsAmount)}
          >
            {viewBtnContent}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Arrived;
