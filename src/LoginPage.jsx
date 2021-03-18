import React from 'react';

import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Container = styled.div({
  padding: '2em 3em',
  margin: 0,
});

export default function LoginPage() {
  return (
    <Container>
      <h1>Log In</h1>
      <LoginFormContainer />
    </Container>
  );
}
