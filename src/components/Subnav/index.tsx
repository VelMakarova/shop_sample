import React from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch, FaUserAlt, FaHeart, FaShoppingBasket, FaSignOutAlt } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import routes from '../../constants/routes';
import { signoutUser } from '../../actions';

const Subnav: React.FC = () => {
  //const history = useHistory();
  const dispatch = useDispatch();

  const signOutHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(signoutUser())
  }

  return (
    <div className="subnav">
      <ul className="subnav-list">
        <li className="subnav-option">
          <Link className="subnav-link has-icon" to={routes.INDEX}>
            <FaSearch />
          </Link>
        </li>
        <li className="subnav-option">
          <Link className="subnav-link has-icon" to={routes.USER_ROUTE}>
            <FaUserAlt />
          </Link>
        </li>
        <li className="subnav-option">
          <Link className="subnav-link has-icon" to={routes.FAV_ROUTE}>
            <FaHeart />
          </Link>
        </li>
        <li className="subnav-option">
          <Link className="subnav-link has-icon" to={routes.CART_ROUTE}>
            <FaShoppingBasket />
          </Link>
        </li>
        <li className="subnav-option" >
          <Link onClick={signOutHandler} className="subnav-link has-icon" to={routes.LOGIN_ROUTE}>
            <FaSignOutAlt />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Subnav;
