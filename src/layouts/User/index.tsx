import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import routes from '../../constants/routes';
import MainTab from '../../components/UserTabs/mainTab';
import AddressesTab from './../../components/UserTabs/addressesTab';
import FavsTab from './../../components/UserTabs/favsTab';

const User: React.FC = () => {
  return (
    <Layout>
      <div className="user-content">
        <div className="user-tabs">
          <ul className="user-tabs-links">
            <li>
              <NavLink
                className="user-tab-link"
                exact={true}
                to={routes.USER_ROUTE}
              >
                User Data
              </NavLink>
            </li>
            <li>
              <NavLink
                className="user-tab-link"
                to={`${routes.USER_ROUTE}/addresses`}
              >
                User's addresses
              </NavLink>
            </li>
            <li>
              <NavLink
                className="user-tab-link"
                to={`${routes.USER_ROUTE}/favs`}
              >
                User's favs
              </NavLink>
            </li>
          </ul>
          <div className="user-tabs-content">
            <Switch>
              <Route path={routes.USER_ROUTE} exact component={MainTab} />
              <Route
                path={`${routes.USER_ROUTE}/addresses`}
                component={AddressesTab}
              />
              <Route path={`${routes.USER_ROUTE}/favs`} component={FavsTab} />
            </Switch>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
