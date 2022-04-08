import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/actions";
import { User, RegisterForm as RegisterFormInterface } from "../../types";
import routes from "../../navigation/routes";

const initForm = {
  email: "",
  password: "",
  confirmPass: "",
  userName: "",
  userLastName: "",
};

const RegisterForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [form, changeForm] = useState<RegisterFormInterface>(initForm);

  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password === form.confirmPass) {
      const newUser: User = {
        email: form.email,
        password: form.password,
        userName: form.userName,
        userLastName: form.userLastName,
        userFavs: [],
      };
      dispatch(registerUser(newUser));
    } else {
      setError("Passwords must be equal");
    }
  };
  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    changeForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <form className="login-form" onSubmit={registerHandler}>
      <h1 className="login-title">Welcome to Cosmetics</h1>
      <div className="form-field">
        <label htmlFor="registerMail" className="form-label">
          <FormattedMessage id="register_field_email" />
        </label>
        <input
          className="form-input"
          type="email"
          id="registerMail"
          value={form.email}
          name="email"
          onChange={onInputChange}
        />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerPass" className="form-label">
          <FormattedMessage id="register_field_pass" />
        </label>
        <input
          className="form-input"
          type="password"
          id="registerPass"
          value={form.password}
          name="password"
          onChange={onInputChange}
        />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerPassRepeat" className="form-label">
          <FormattedMessage id="register_field_repeat_pass" />
        </label>
        <input
          className="form-input"
          type="password"
          id="registerPassRepeat"
          value={form.confirmPass}
          name="confirmPass"
          onChange={onInputChange}
        />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerName" className="form-label">
          <FormattedMessage id="register_field_name" />
        </label>
        <input
          className="form-input"
          type="text"
          id="registerName"
          value={form.userName}
          name="userName"
          onChange={onInputChange}
        />
        <div className="form-input-border" />
      </div>
      <div className="form-field">
        <label htmlFor="registerLastname" className="form-label">
          <FormattedMessage id="register_field_lastname" />
        </label>
        <input
          className="form-input"
          type="text"
          id="registerLastname"
          value={form.userLastName}
          name="userLastName"
          onChange={onInputChange}
        />
        <div className="form-input-border" />
      </div>
      <button type="submit" className="btn-primary">
        <FormattedMessage id="btn_sign_in" />
      </button>
      <div className="login-reference">
        <FormattedMessage id="already_registered" />
        <Link className="link" to={routes.LOGIN_ROUTE}>
          {" "}
          <FormattedMessage id="link_to_login" />
        </Link>
      </div>
      <div className="login-error">{error}</div>
    </form>
  );
};

export default RegisterForm;
