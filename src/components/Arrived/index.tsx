import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import ITEMS_AMOUNT from "../../config/settings";
import { Product } from "../../types";
import { RootState } from "../../store/rootReducer";
import ProductCard from "../ProductCard";
import AmountToggler from "../common/AmountToggler";

const Arrived: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const [showItemsStatus, setItemsStatus] = useState(false);
  const amount = showItemsStatus ? products?.length : ITEMS_AMOUNT;

  const renderProductsCards = () =>
    products?.slice(0, amount).map((item: Product) => {
      return <ProductCard key={item.id} product={item} showDiscount={false} />;
    });

  return (
    <div className="cards arrived">
      <div className="cards-content">
        <div className="cards-title">
          <FormattedMessage id="section_arrived" />
        </div>
        <ul className="cards-list">{renderProductsCards()}</ul>
        <AmountToggler
          length={products?.length}
          updateStatus={setItemsStatus}
          status={showItemsStatus}
        />
      </div>
    </div>
  );
};

export default Arrived;
