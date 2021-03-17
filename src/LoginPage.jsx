import React from 'react';

import LoginFormContainer from './LoginFormContainer';

import PageMain from './PageMain';

export default function LoginPage() {
  return (
    <PageMain>
      <h2>Log In</h2>
      <LoginFormContainer />
    </PageMain>
  );
}
