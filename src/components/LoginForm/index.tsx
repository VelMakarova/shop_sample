import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions';
import { LoginForm as LoginFormInterface } from '../../interfaces';
import routes from '../../constants/routes';

const initForm = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const dispatch = useDispatch();

  const [form, changeForm] = useState<LoginFormInterface>(initForm);

  const onInputChange = ({ target }: any) => changeForm({ ...form, [target.name]: target.value });

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email: form.email,
      password: form.password,
    }
    dispatch(loginUser(user));
  }

  return (
    <form className="login-form" onSubmit={loginHandler}>
      <h1 className="login-title">Welcome to Cosmetics</h1>
      <div className="form-field">
        <label htmlFor="loginMail" className="form-label">
          Enter Login
        </label>
        <input
          className="form-input"
          type="text" id="loginMail"
          name="email"
          onChange={onInputChange}
        />
        <div className="form-inbut-border" />
      </div>
      <div className="form-field">
        <label htmlFor="loginPass" className="form-label">
          Enter password
        </label>
        <input
          className="form-input"
          type="password"
          id="loginPass"
          name="password"
          onChange={onInputChange}
        />
        <div className="form-inbut-border" />
      </div>
      <button className="btn-primary">Log in</button>
      <div className="login-reference">
        Haven't account yet? 
        <Link to={routes.SIGNUP_ROUTE}> Go here to signup</Link>
      </div>
    </form>
  );
};

export default LoginForm;
