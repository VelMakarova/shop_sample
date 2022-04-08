import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { removeFromCart, changeQuantity } from "../../../store/cart/actions";
import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../../../store/cart/actionTypes";
import { CartProduct } from "../../../types";

interface CartItemProps {
  propsData: CartProduct;
}

const initial: CartProduct = {
  id: -0,
  name: "",
  manufacturer: "",
  price: 0,
  discount: 0,
  description: "",
  img: "",
  quantity: 0,
  productId: 0,
};

const CartItem: React.FC<CartItemProps> = ({ propsData }) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(initial);

  const removeFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const changeQuantityHandler = (type: string, id: number) => {
    if (type === DECREASE_QUANTITY && item.quantity === 1) {
      // eslint-disable-next-line no-alert
      const agreeToDelete = window.confirm(
        "The item will be removed from the cart. Are you sure you want to continue?"
      );
      if (agreeToDelete) {
        removeFromCartHandler(id);
      }
    } else {
      dispatch(changeQuantity(type, id));
    }
  };

  const showPrice = (item: CartProduct) => {
    if (item.discount) {
      return (
        <>
          <div className="cart-cell-old-price">{item.price}$</div>
          <div className="cart-cell-actual-price">
            {item.price - item.price * (item.discount / 100)}$
          </div>
        </>
      );
    }
    return <div className="cart-cell-actual-price">{item.price}$</div>;
  };

  const getTotalDiscountPrice = () =>
    item.price - item.price * (item.discount / 100) * item.quantity;

  const getTotalPrice = () => item.price * item.quantity;

  useEffect(() => {
    if (propsData) {
      setItem(propsData);
    }
  }, [propsData]);

  return (
    <tr key={item.id}>
      <td className="cart-cell product-img">
        <div className="cart-cell-content">
          <div className="cart-product-img">
            <div className="media">
              <img className="img" src={item.img} alt="cart-img" />
            </div>
          </div>
        </div>
      </td>
      <td className="cart-cell product-information">
        <div className="cart-cell-content">
          <div className="cart-product-name text-truncate">{item.name}</div>
          <div className="cart-product-manufacturer text-truncate">
            {item.manufacturer}
          </div>
          <div className="cart-product-description text-truncate">
            {item.description}
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
              type="button"
              className="cart-quantity-btn has-icon"
              onClick={() =>
                changeQuantityHandler(DECREASE_QUANTITY, item.productId)
              }
            >
              <FaCaretLeft />
            </button>
            <div className="cart-quantity-current">{item.quantity}</div>
            <button
              type="button"
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
          {item.discount
            ? `${getTotalDiscountPrice()}$`
            : `${getTotalPrice()}$`}
        </div>
      </td>
      <td className="cart-cell">
        <div className="cart-cell-content">
          <button
            type="button"
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
