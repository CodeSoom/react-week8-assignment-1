import React from 'react';

import { useSelector } from 'react-redux';

import LoginFormContainer from '../components/LoginFormContainer';

import { LoginContainer } from '../styles';


import { get } from '../utils';

export default function LoginPage() {
  const accessToken = useSelector(get('accessToken'));

  return (
    <LoginContainer>
      <h2>
        {accessToken ? 'Log out' : 'Log in'}
      </h2>
      <LoginFormContainer />
    </LoginContainer>
  );
}
