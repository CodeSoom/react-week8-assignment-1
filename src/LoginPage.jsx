import React from 'react';

import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Login = styled.div({
  display: 'grid',
  gridTemplateRows: '1fr 2fr',
  height: '100%',
  '& h1': {
    textAlign: 'center',
    alignSelf: 'end',
  },
});

export default function LoginPage() {
  return (
    <Login>
      <h1>안녕하세요.</h1>
      <LoginFormContainer />
    </Login>
  );
}
