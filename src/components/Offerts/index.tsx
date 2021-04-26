import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import SECTION_TITLES from '../../constants/sectionsTitles';
import { ADD_TO_CART, VIEW_LESS, VIEW_MORE } from '../../constants/btns';
import { addToCart, toggleFavorites } from '../../actions';
import { ITEMS_AMOUNT } from '../../constants/settings';
import routes from '../../constants/routes';
import { RootState } from '../../reducers/rootReducer';
import { Product } from '../../interfaces';

const Offert: React.FC = () => {
  const [discountProducts, setDiscountProducts] = useState([]);
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const { products } = useSelector((state: RootState) => state.products);
  const [shownItemsAmount, showAll] = useState(false);
  const amount = shownItemsAmount ? products.length : ITEMS_AMOUNT;
  const viewBtnContent = shownItemsAmount ? VIEW_LESS : VIEW_MORE;
  const favs = useSelector((state: RootState) => state.user.user.userFavs);

  useEffect(() => {
    setDiscountProducts(
      products?.filter((item: Product) => item.productDiscount > 0)
    );
  }, [products]);

  const addToCartHandler = (id: number) => {
    const targetElement = products.find((item: Product) => item.id === id);
    dispatch(addToCart(targetElement, id));
  };

  const toggleFavHandler = (item: Product) => {
    dispatch(toggleFavorites(item));
  };

  const productsItems = () => {
    return discountProducts
      ?.slice(0, amount)
      .map((item: Product, index: number) => {
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
                onClick={() => toggleFavHandler(item)}
            >
              <FaHeart />
            </button>
            <div className="card-img">
              <img
                className="img"
                src={item.productImg}
                alt={item.productName}
              />
            </div>
            <div className="card-info">
              <div className="card-name text-truncate">{item.productName}</div>
              <div className="card-manufacturer text-truncate">
                {item.productManufacturer}
              </div>
              <div className="card-price">
                <div className="card-old-price text-truncate">{`${item.productPrice}$`}</div>
                <div className="card-actual-price text-truncate">{`${discountPrice}$`}</div>
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
    return currentLangData?.specialTitle;
  };

  return (
    <div className="cards">
      <div className="cards-content">
        <div className="cards-title">{getTitle()}</div>
        <ul className="cards-list">{productsItems()}</ul>
        {discountProducts?.length > 8 ? (
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

export default Offert;
