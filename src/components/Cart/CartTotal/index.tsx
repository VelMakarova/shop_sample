import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { RootState } from "../../../store/rootReducer";
import { CartProduct } from "../../../types";

const CartTotal: React.FC = () => {
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state: RootState) => state.user.userCart);
  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  const getTotalDiscount = () => {
    let sum: number = 0;

    cartItems.forEach((item: CartProduct) => {
      const itemSum = item.price * (item.discount / 100) * item.quantity;
      sum += itemSum;
    });
    return Number(sum.toFixed(2));
  };

  const getTotalSum = () => {
    let sum: number = 0;

    cartItems.forEach((item: CartProduct) => {
      if (item.discount) {
        const sumItem = item.price - item.price * (item.discount / 100);
        sum += sumItem * item.quantity;
      } else {
        sum += item.price * item.quantity;
      }
    });
    return Number(sum.toFixed(2));
  };

  return (
    <table className="cart-total">
      <tbody>
        <tr className="cart-total-discount">
          <td>
            <div className="cart-total-content content-label">
              <FormattedMessage id="cart_discount" />
            </div>
          </td>
          <td>
            <div className="cart-total-content content-value">
              {getTotalDiscount()}$
            </div>
          </td>
        </tr>
        <tr className="cart-total-sum">
          <td>
            <div className="cart-total-content content-label">
              <FormattedMessage id="cart_total_to_pay" />
            </div>
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
