import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { fetchUser, removeFromCart, changeQuantity } from '../../../actions';
import { INCREASE_QUANTITY, DECREASE_QUANTITY } from '../../../types';
import { CartProduct } from '../../../interfaces';

interface CartItemProps {
  propsData: CartProduct;
}

const initial: CartProduct = {
  productName: '',
  productManufacturer: '',
  productDescription: '',
  productPrice: 0,
  productDiscount: 0,
  productImg: '',
  productQuantity: 0,
  productId: 0,
};

const CartItem: React.FC<CartItemProps> = ({ propsData }) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(initial);

  const removeFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
    dispatch(fetchUser());
  };

  const changeQuantityHandler = (type: string, id: number) => {
    if (type === DECREASE_QUANTITY && item.productQuantity === 1) {
      const agreeToDelete = window.confirm(
        'The item will be removed from the cart. Are you sure you want to continue?'
      );
      if (agreeToDelete) {
        removeFromCartHandler(id);
      }
    } else {
      dispatch(changeQuantity(type, id));
    }
  };

  const showPrice = (item: CartProduct) => {
    if (item.productDiscount) {
      return (
        <>
          <div className="cart-cell-old-price">{item.productPrice}$</div>
          <div className="cart-cell-actual-price">
            {item.productPrice -
              item.productPrice * (item.productDiscount / 100)}
            $
          </div>
        </>
      );
    } else {
      return <div className="cart-cell-actual-price">{item.productPrice}$</div>;
    }
  };

  const getTotalDiscountPrice = () => {
    return (
      item.productPrice -
      item.productPrice * (item.productDiscount / 100) * item.productQuantity
    );
  };

  const getTotalPrice = () => {
    return item.productPrice * item.productQuantity;
  };

  useEffect(() => {
    if (propsData) {
      setItem(propsData);
    }
  }, [propsData]);

  return (
    <tr>
      <td className="cart-cell product-img">
        <div className="cart-cell-content">
          <div className="cart-product-img">
            <div className="media">
              <img className="img" src={item.productImg} alt="cart-img" />
            </div>
          </div>
        </div>
      </td>
      <td className="cart-cell product-information">
        <div className="cart-cell-content">
          <div className="cart-product-name text-truncate">
            {item.productName}
          </div>
          <div className="cart-product-manufacturer text-truncate">
            {item.productManufacturer}
          </div>
          <div className="cart-product-description text-truncate">
            {item.productDescription}
          </div>
        </div>
      </td>
      <td className="cart-cell">
        <div className="cart-cell-content price-content">{showPrice(item)}</div>
      </td>
      <td className="cart-cell">
        <div className="cart-cell-content">
          <div className="cart-quantity">
            <button
              className="cart-quantity-btn has-icon"
              onClick={() =>
                changeQuantityHandler(DECREASE_QUANTITY, item.productId)
              }
            >
              <FaCaretLeft />
            </button>
            <div className="cart-quantity-current">{item.productQuantity}</div>
            <button
              className="cart-quantity-btn has-icon"
              onClick={() =>
                changeQuantityHandler(INCREASE_QUANTITY, item.productId)
              }
            >
              <FaCaretRight />
            </button>
          </div>
        </div>
      </td>
      <td className="cart-cell">
        <div className="cart-cell-content">
          {item.productDiscount
            ? `${getTotalDiscountPrice()}$`
            : `${getTotalPrice()}$`}
        </div>
      </td>
      <td className="cart-cell">
        <div className="cart-cell-content">
          <button
            className="cart-btn-remove has-icon"
            onClick={() => {
              removeFromCartHandler(item.productId);
            }}
          >
            <MdClose />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
