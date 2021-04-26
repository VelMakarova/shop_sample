/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartHeader from '../CartHeader';
import CartItem from '../CartItem';
import CartTotal from '../CartTotal';
import { fetchUserData, fetchUser } from '../../../actions';
import { RootState } from '../../../reducers/rootReducer';
import { CartProduct } from '../../../interfaces/index';
import { FETCH_CART_DATA } from '../../../types';

const CartContent: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.user.user.userCart);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchUserData(FETCH_CART_DATA, 'userCart'));
  }, []);

  const empty = (
    <tr>
      <td colSpan={6}>
        <div className="cart-empty-title">Cart is empty:(</div>
      </td>
    </tr>
  );

  const cartItems = () => {
    if (cart === undefined || !cart.length) {
      return empty;
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
              cart === undefined || !cart.length ? '' : 'has-borders'
            }`}
          >
            {cartItems()}
          </tbody>
        </table>
        <div className="cart-controls">
          <div className="cart-control-continue">
            <button className="btn-outline">CONTINUE SHOPPING</button>
          </div>
          <div className="cart-control-total">
            <CartTotal />
            <button className="btn-primary">Go to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
