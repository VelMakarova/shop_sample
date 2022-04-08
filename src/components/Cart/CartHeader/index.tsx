import React from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { RootState } from "../../../store/rootReducer";

const CartHeader: React.FC = () => {
  const { isMobile } = useSelector((state: RootState) => state.uiSettings);
  const colSpanSize = isMobile ? 1 : 2;

  return (
    <thead>
      <tr>
        <th colSpan={colSpanSize} className="cart-head-cell">
          <div className="cart-head-content">
            <FormattedMessage id="cart_product" />
          </div>
        </th>
        <th colSpan={1} className="cart-head-cell">
          <div className="cart-head-content">
            <FormattedMessage id="cart_price" />
          </div>
        </th>
        <th colSpan={1} className="cart-head-cell">
          <div className="cart-head-content">
            <FormattedMessage id="cart_quantity" />
          </div>
        </th>
        <th colSpan={1} className="cart-head-cell">
          <div className="cart-head-content">
            <FormattedMessage id="cart_total" />
          </div>
        </th>
        <th colSpan={1} className="cart-head-cell">
          <div className="cart-head-content">
            <FormattedMessage id="cart_remove" />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default CartHeader;
