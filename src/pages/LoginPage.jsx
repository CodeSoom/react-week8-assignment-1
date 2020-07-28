import React from 'react';

import LoginFormContainer from '../components/login/LoginFormContainer';
import PageWrapper from '../components/PageWrapper';

export default function LoginPage() {
  return (
    <PageWrapper>
      <h2>Log In</h2>
      <LoginFormContainer />
    </PageWrapper>
  );
}
