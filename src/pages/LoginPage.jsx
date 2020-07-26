import React from 'react';

import LoginFormContainer from '../containers/LoginFormContainer';

import Contents from '../styles/Contents';
import Title from '../styles/Title';

export default function LoginPage() {
  return (
    <>
      <Title>Log In</Title>
      <Contents>
        <LoginFormContainer />
      </Contents>
    </>
  );
}
