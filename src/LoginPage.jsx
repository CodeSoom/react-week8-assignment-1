import React from 'react';

import LoginFormContainer from './LoginFormContainer';
import PageWrapper from './PageWrapper';

export default function LoginPage() {
  return (
    <PageWrapper>
      <h2>Log In</h2>
      <LoginFormContainer />
    </PageWrapper>
  );
}
