import React from "react";
import { Link } from "react-router-dom";
import { TITLE, SUBTITLE } from "../../constants/logoTitles";
import routes from "../../navigation/routes";

const Logo: React.FC = () => (
  <Link to={routes.INDEX} className="logo">
    <div className="logo-title">{TITLE}</div>
    <div className="logo-subtitle">{SUBTITLE}</div>
  </Link>
);

export default Logo;
