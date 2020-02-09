import React from 'react';
import Login from '../Login';
import GlobalStyle from '../../styles/global';

export default {
  title: 'Login',
  component: Login,
};

export const LoginPage = () => (
    <>
      <GlobalStyle />
      <Login />
    </>
);