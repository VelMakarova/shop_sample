import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import routes from "../../navigation/routes";
import perfumes from "../../../public/img/categories/perfumes.png";
import organic from "../../../public/img/categories/organic.png";
import makeup from "../../../public/img/categories/makeup.png";
import care from "../../../public/img/categories/care.png";

const Categories: React.FC = () => (
  <div className="categories">
    <div className="categories-content">
      <div className="categories-item care">
        <Link className="categories-link" to={routes.INDEX}>
          <span className="categories-label">
            <FormattedMessage id="category_skincare" />
          </span>
          <img className="categories-img" src={care} alt="skin care" />
        </Link>
      </div>
      <div className="categories-item perfumes">
        <Link className="categories-link" to={routes.INDEX}>
          <span className="categories-label">
            <FormattedMessage id="category_perfumes" />
          </span>
          <img className="categories-img" src={perfumes} alt="perfumes" />
        </Link>
      </div>
      <div className="categories-item makeup">
        <Link className="categories-link" to={routes.INDEX}>
          <span className="categories-label">
            <FormattedMessage id="category_makeup" />
          </span>
          <img className="categories-img" src={makeup} alt="make up" />
        </Link>
      </div>
      <div className="categories-item organic">
        <Link className="categories-link" to={routes.INDEX}>
          <span className="categories-label">
            <FormattedMessage id="category_organic" />
          </span>
          <img className="categories-img" src={organic} alt="organic" />
        </Link>
      </div>
    </div>
  </div>
);

export default Categories;
