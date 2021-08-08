import { memo } from 'react';
import LoginFormContainer from './LoginFormContainer';

function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <LoginFormContainer />
    </div>
  );
}

export default memo(LoginPage);
