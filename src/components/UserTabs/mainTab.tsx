import React from "react";
import { FormattedMessage } from "react-intl";

const MainTab: React.FC = () => (
  <div className="tab">
    <div className="tab-column">
      <div className="form-field">
        <label htmlFor="userName" className="form-label">
          <FormattedMessage id="user_field_name" />
        </label>
        <input className="form-input" type="text" id="userName" />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="userLastName" className="form-label">
          <FormattedMessage id="user_field_last_name" />
        </label>
        <input className="form-input" type="text" id="userLastName" />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="userLogin" className="form-label">
          <FormattedMessage id="user_field_login" />
        </label>
        <input className="form-input" type="text" id="userLogin" />
        <div className="form-input-border" />
      </div>
    </div>
    <div className="tab-column">
      <div className="form-field">
        <label htmlFor="oldPass" className="form-label">
          <FormattedMessage id="user_field_pass" />
        </label>
        <input className="form-input" type="password" id="oldPass" />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="newPass" className="form-label">
          <FormattedMessage id="user_field_new_pass" />
        </label>
        <input className="form-input" type="password" id="newPass" />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="newPassRepeat" className="form-label">
          <FormattedMessage id="user_field_repeat_new_pass" />
        </label>
        <input className="form-input" type="password" id="newPassRepeat" />
        <div className="form-input-border" />
      </div>
    </div>
  </div>
);

export default MainTab;
