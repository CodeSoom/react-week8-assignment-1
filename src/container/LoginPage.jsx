import React from 'react';

import LoginFormContainer from 'container/LoginFormContainer';

import { Title, Container } from '../styled';

export default function LoginPage() {
  return (
    <Container>
      <Title>Log In</Title>
      <LoginFormContainer />
    </Container>
  );
}
