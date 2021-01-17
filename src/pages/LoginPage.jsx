import React from 'react';

import Container from '../styles/Container';

import LoginFormContainer from '../containers/LoginFormContainer';

export default function LoginPage() {
  return (
    <Container>
      <h2>Log In</h2>
      <LoginFormContainer />
    </Container>
  );
}
