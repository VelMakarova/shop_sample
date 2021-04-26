import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { toggleFavorites, addToCart } from '../../actions';
import Layout from '../../components/Layout';
import { ADD_TO_CART, ADD_TO_FAVS } from '../../constants/btns';
import Collapse from '../../components/Collapse';
import { RootState } from '../../reducers/rootReducer';
import { IProduct } from '../../interfaces';

interface ParamTypes {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const item = useSelector((state: RootState) =>
    state.products.products.find(
      (product: IProduct) => String(product.id) === id
    )
  );
  const dispatch = useDispatch();

  const toggleFavHandler = (item: IProduct) => {
    dispatch(toggleFavorites(item));
  };

  const addToCartHandler = (id: number) => {
    dispatch(addToCart(item, id));
  };

  const getPrice = (price: number, discount: number) => {
    if (discount) {
      return (
        <>
          <div className="product-old-price">{`${price}$`}</div>
          <div className="product-actual-price">
            {`${price - price * (discount / 100)}$`}
          </div>
        </>
      );
    } else {
      return <div className="product-actual-price">{`${price}$`}</div>;
    }
  };

  return (
    <Layout>
      <main className="main">
        <div className="product-container">
          <div className="product">
            <div className="product-gallery">
              <button
                className={`product-fav has-icon ${
                  item?.productFav ? 'is-active' : ''
                }`}
                onClick={() => toggleFavHandler(item)}
              >
                <FaHeart />
              </button>
              <div className="gallery-main-img">
                <img
                  className="gallery-main-img-content"
                  src={`.${item?.productImg}`}
                  alt="product"
                />
              </div>
            </div>
            <div className="product-info">
              <div className="product-titles">
                <div className="product-name">{item?.productName}</div>
                <div className="product-manufacturer">
                  {item?.productManufacturer}
                </div>
              </div>
              <div className="product-description">
                <Collapse
                  title="Description"
                  content={item?.productDescription}
                />
              </div>
              <div className="product-price">
                {getPrice(item?.productPrice, item?.productDiscount)}
              </div>
              <div className="product-controls">
                <button
                  className="product-control add-to-cart"
                  onClick={() => addToCartHandler(item?.id)}
                >
                  {ADD_TO_CART}
                </button>
                <button
                  className="product-control add-to-fav"
                  onClick={() => toggleFavHandler(item)}
                >
                  {ADD_TO_FAVS}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Product;
