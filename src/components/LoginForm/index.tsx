import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions';
import { ILoginForm } from '../../interfaces';

const initForm = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, changeForm] = useState<ILoginForm>(initForm);

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
    </form>
  );
};

export default LoginForm;
