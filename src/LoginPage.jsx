import React from 'react';

import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Title = styled.h2({
  fontSize: '2em',
  margin: 0,
  padding: '.2em',
  color: '#FFABAB',
});

export default function LoginPage() {
  return (
    <div>
      <Title>Log In</Title>
      <LoginFormContainer />
    </div>
  );
}
