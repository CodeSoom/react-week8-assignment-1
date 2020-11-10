import React from 'react';

import styled from '@emotion/styled';
import LoginFormContainer from './LoginFormContainer';

import Container from './Container';

const LoginBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.7)',
  backdropFilter: 'saturate(180%) blur(10px)',
  borderRadius: '1em',
  width: '30%',
  height: '70%',
  color: '#000',
  '& h2': {
    marginTop: '3em',
    fontSize: '2.5em',
  },
});

const LoginForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export default function LoginPage() {
  return (
    <Container>
      <LoginBox>
        <h2>
          Log In
        </h2>
        <LoginForm>
          <LoginFormContainer />
        </LoginForm>
      </LoginBox>
    </Container>
  );
}
