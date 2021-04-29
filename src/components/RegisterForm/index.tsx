import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions';
import { useDispatch } from 'react-redux';
import { ENG } from '../../constants/languages';
import { User } from '../../interfaces';
import { RegisterForm as RegisterFormInterface } from '../../interfaces';
import routes from '../../constants/routes';

const initForm = {
  email: '',
  password: '',
  confirmPass: '',
  userName: '',
  userLastName: '',
}

const RegisterForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [form, changeForm] = useState<RegisterFormInterface>(initForm)

  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password === form.confirmPass) {
      const newUser: User = {
        email: form.email,
        password: form.password,
        userName: form.userName,
        userLastName: form.userLastName,
        userCart: [],
        userFavs: [],
        userLanguage: ENG,
      }
      dispatch( registerUser(newUser));
    } else {
      setError('Passwords must be equal')
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
      <div className="login-reference">
        Have you already had an account? 
        <Link to={routes.LOGIN_ROUTE}> Go here to log in.</Link>
      </div>
      <div className="login-error">{error}</div>
    </form>
  );
};

export default RegisterForm;
