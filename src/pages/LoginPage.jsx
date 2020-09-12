import React from 'react';

import styled from '@emotion/styled';

import LoginFormContainer from '../containers/LoginFormContainer';

const StyledLoginPage = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <h2>Log In</h2>
      <LoginFormContainer />
    </StyledLoginPage>
  );
}
