import React from 'react';

import LoginFormContainer from '../components/containers/LoginFormContainer';

import Title from '../styles/Title';

export default function LoginPage() {
  return (
    <div>
      <Title>Log In</Title>
      <LoginFormContainer />
    </div>
  );
}
