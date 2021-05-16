import React from 'react';

import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Login = styled.div({
  width: '100%',
  textAlign: 'center',
});

export default function LoginPage() {
  return (
    <Login>
      <h2>Log In</h2>
      <LoginFormContainer />
    </Login>
  );
}
