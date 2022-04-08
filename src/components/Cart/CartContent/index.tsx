import React from "react";
import { useSelector } from "react-redux";
import CartHeader from "../CartHeader";
import CartItem from "../CartItem";
import CartTotal from "../CartTotal";
import CartEmpty from "../CartEmpty";
import { RootState } from "../../../store/rootReducer";
import { CartProduct } from "../../../types";

const CartContent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const renderCartItems = () => {
    if (cart === undefined || !cart.length) {
      return <CartEmpty />;
    }
    return cart.map((item: CartProduct) => (
      <CartItem key={item.productId} propsData={item} />
    ));
  };

  return (
    <div className="cart">
      <div className="cart-content">
        <table className="cart-table">
          <CartHeader />
          <tbody
            className={`tbody ${
              cart === undefined || !cart.length ? "" : "has-borders"
            }`}
          >
            {renderCartItems()}
          </tbody>
        </table>
        <div className="cart-controls">
          <div className="cart-control-continue">
            <a href="/" className="btn-outline">
              CONTINUE SHOPPING
            </a>
          </div>
          <div className="cart-control-total">
            <CartTotal />
            <button className="btn-primary" type="button">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
