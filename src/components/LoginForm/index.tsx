import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { loginUser } from "../../store/auth/actions";
import { LoginForm as LoginFormInterface } from "../../types";
import routes from "../../navigation/routes";

const initForm: LoginFormInterface = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const [form, changeForm] = useState<LoginFormInterface>(initForm);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    changeForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: form.email,
      password: form.password,
    };
    dispatch(loginUser(user));
  };

  return (
    <form className="login-form" onSubmit={loginHandler}>
      <h1 className="login-title">Welcome to Cosmetics</h1>
      <div className="form-field">
        <label htmlFor="loginMail" className="form-label">
          <FormattedMessage id="register_field_email" />
        </label>
        <input
          className="form-input"
          type="text"
          id="loginMail"
          name="email"
          onChange={onInputChange}
        />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="loginPass" className="form-label">
          <FormattedMessage id="register_field_pass" />
        </label>
        <input
          className="form-input"
          type="password"
          id="loginPass"
          name="password"
          onChange={onInputChange}
        />
        <div className="form-input-border" />
      </div>
      <button type="submit" className="btn-primary">
        <FormattedMessage id="btn_log_in" />
      </button>
      <div className="login-reference">
        <FormattedMessage id="not_registered" />
        <Link className="link" to={routes.SIGNUP_ROUTE}>
          <FormattedMessage id="link_to_sign_in" />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
