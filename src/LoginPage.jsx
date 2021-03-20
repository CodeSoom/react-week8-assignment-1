import React from 'react';

import LoginFormContainer from './LoginFormContainer';
import { PageBody, PageTop } from './style/layout';

export default function LoginPage() {
  return (
    <div>
      <PageTop>
        <h2>Log In</h2>
      </PageTop>
      <PageBody>
        <LoginFormContainer />
      </PageBody>
    </div>
  );
}
