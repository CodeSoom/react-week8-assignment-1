import React from 'react';

import LoginFormContainer from '../components/LoginFormContainer';

import { LoginContainer } from '../styles';

export default function LoginPage() {
  return (
    <div>
      <LoginContainer>
        <h2>Log In</h2>
        <LoginFormContainer />
      </LoginContainer>
    </div>
  );
}
