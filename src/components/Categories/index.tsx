import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CATEGORIES from '../../constants/categories';
import { RootState } from '../../reducers/rootReducer';

const Categories: React.FC = () => {
  const { language } = useSelector((state: RootState) => state.language);
  let currentLanguagePack = CATEGORIES.find(
    (item) => item.language === language
  );
  const catItems = () => {
    return currentLanguagePack?.category.map((item, index) => {
      return (
        <div key={index} className={`categories-item ${item.categoryLabel}`}>
          <Link className="categories-link" to={item.categoryPath}>
            <span className="categories-label">{item.categoryName} </span>
            <img
              className="categories-img"
              src={item.categoryImg}
              alt={item.categoryLabel}
            />
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="categories">
      <div className="categories-content">{catItems()}</div>
    </div>
  );
};

export default Categories;
