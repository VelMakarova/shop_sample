import React, { useState } from 'react';
import LoginLayout from './../../components/LoginLayout';
import LoginForm from './../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

const Login: React.FC = () => {
  const [isRegistered] = useState(false);

  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
};

export default Login;
