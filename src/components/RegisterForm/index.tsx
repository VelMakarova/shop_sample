import React, { useState } from 'react';
import { registerUser } from '../../actions';
import { useDispatch } from 'react-redux';
import { ENG } from '../../constants/languages';
import { User, IRegisterForm } from '../../interfaces';

const initForm = {
  email: '',
  password: '',
  confirmPass: '',
  userName: '',
  userLastName: '',
}

const RegisterForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [form, changeForm] = useState<IRegisterForm>(initForm)

  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: User = {
      email: form.email,
      password: form.password,
      userName: form.userName,
      userLastName: form.userLastName,
      userCart: [],
      userFavs: [],
      userLanguage: ENG,
    }
  
    if (form.password === form.confirmPass) {
      dispatch( registerUser(newUser));
    }
  }
  const onInputChange = ({ target }: any) => changeForm({ ...form, [target.name]: target.value })

  return (
    <form className="login-form" onSubmit={registerHandler}>
      <h1 className="login-title">Welcome to Cosmetics</h1>
      <div className="form-field">
        <label htmlFor="registerMail" className="form-label">
          Enter Login
        </label>
        <input
          className="form-input"
          type="email"
          id="registerMail"
          value={form.email}
          name="email"
          onChange={onInputChange}
        />
        <div className="form-inbut-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerPass" className="form-label">
          Enter password
        </label>
        <input
          className="form-input"
          type="password"
          id="registerPass"
          value={form.password}
          name="password"
          onChange={onInputChange}
        />
        <div className="form-inbut-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerPassRepeat" className="form-label">
          Repeat password
        </label>
        <input
          className="form-input"
          type="password"
          id="registerPassRepeat"
          value={form.confirmPass}
          name="confirmPass"
          onChange={onInputChange}
        />
        <div className="form-inbut-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerName" className="form-label">
          Enter your name
        </label>
        <input
          className="form-input"
          type="text"
          id="registerName"
          value={form.userName}
          name="userName"
          onChange={onInputChange}
        />
        <div className="form-inbut-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerLastname" className="form-label">
          Enter your lastname
        </label>
        <input
          className="form-input"
          type="text"
          id="registerLastname"
          value={form.userLastName}
          name="userLastName"
          onChange={onInputChange}
        />
        <div className="form-inbut-border" />
      </div>
      
      <button
        type="submit"
        className="btn-primary"
      >
        Sign in
      </button>
    </form>
  );
};

export default RegisterForm;
