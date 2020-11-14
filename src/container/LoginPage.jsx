import React from 'react';

import LoginFormContainer from 'container/LoginFormContainer';

import styled from '@emotion/styled';

import { Title, Container } from '../styled';

const FormBox = styled.div({
  marginTop: '80px',
});

export default function LoginPage() {
  return (
    <Container>
      <Title>Log In</Title>
      <FormBox>
        <LoginFormContainer />
      </FormBox>
    </Container>
  );
}
