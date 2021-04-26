import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import { CartProduct } from '../../../interfaces/index';

const CartTotal: React.FC = () => {
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state: RootState) => state.user.user.userCart);
  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  const getTotalDiscount = () => {
    let sum: number = 0;

    cartItems.forEach((item: CartProduct) => {
      const itemSum =
        item.productPrice * (item.productDiscount / 100) * item.productQuantity;
      sum += itemSum;
    });
    return Number(sum.toFixed(2));
  };

  const getTotalSum = () => {
    let sum: number = 0;

    cartItems.forEach((item: CartProduct) => {
      if (item.productDiscount) {
        let sumItem =
          item.productPrice - item.productPrice * (item.productDiscount / 100);
        sum += sumItem * item.productQuantity;
      } else {
        sum += item.productPrice * item.productQuantity;
      }
    });
    return Number(sum.toFixed(2));
  };

  return (
    <table className="cart-total">
      <tbody>
        <tr className="cart-total-discount">
          <td>
            <div className="cart-total-content content-label">discount</div>
          </td>
          <td>
            <div className="cart-total-content content-value">
              {getTotalDiscount()}$
            </div>
          </td>
        </tr>
        <tr className="cart-total-sum">
          <td>
            <div className="cart-total-content content-label">total to pay</div>
          </td>
          <td>
            <div className="cart-total-content content-value">
              {getTotalSum()}$
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTotal;
