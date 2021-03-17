import React from 'react';

import LoginFormContainer from './LoginFormContainer';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontSize: '35px',
  margin: '30px 10px',
  padding: '10px 20px',
  borderBottom: '2px solid rgba(249, 253, 252, 0.5)',
  color: '#F9FDFC',
});

export default function LoginPage() {
  return (
    <div>
      <Title>Log In</Title>
      <LoginFormContainer />
    </div>
  );
}
