import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/rootReducer';
import CART_TITLES from '../../../constants/cartTitles';

const CartHeader: React.FC = () => {
  const { language } = useSelector((state: RootState) => state.language);
  const { isMobile } = useSelector((state: RootState) => state.isMobile);
  const colSpanSize = isMobile ? 1 : 2;

  const renderItems = () => {
    const currentLangPack = CART_TITLES.find(
      (item) => language === item.language
    );
    const items = currentLangPack!.items.map((item, index) => {
      return (
        <th
          key={index}
          colSpan={index ? 1 : colSpanSize}
          className="cart-head-cell"
        >
          <div className="cart-head-content">{item}</div>
        </th>
      );
    });
    return items;
  };

  return (
    <thead>
      <tr>{renderItems()}</tr>
    </thead>
  );
};

export default CartHeader;
