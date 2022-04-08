import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import ITEMS_AMOUNT from "../../config/settings";
import { RootState } from "../../store/rootReducer";
import { Product } from "../../types";
import ProductCard from "../ProductCard";
import AmountToggler from "../common/AmountToggler";

const Offert: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const [showItemsStatus, setItemsStatus] = useState(false);
  const amount = showItemsStatus ? products.length : ITEMS_AMOUNT;

  const discountProducts = useMemo(() => {
    return products?.filter((item: Product) => item.discount > 0);
  }, [products]);

  const renderProductsCards = () =>
    discountProducts?.slice(0, amount).map((item: Product) => {
      return <ProductCard key={item.id} product={item} showDiscount />;
    });

  return (
    <div className="cards">
      <div className="cards-content">
        <div className="cards-title">
          <FormattedMessage id="section_special_offert" />
        </div>
        <ul className="cards-list">{renderProductsCards()}</ul>
        <AmountToggler
          length={discountProducts?.length}
          updateStatus={setItemsStatus}
          status={showItemsStatus}
        />
      </div>
    </div>
  );
};

export default Offert;
