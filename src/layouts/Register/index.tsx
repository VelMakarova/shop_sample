import React from 'react';
import LoginLayout from './../../components/LoginLayout';
import RegisterForm from '../../components/RegisterForm';

const Register: React.FC = () => {

  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
};

export default Register;
