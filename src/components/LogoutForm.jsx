import React from 'react';

import LoginForm from '../styles/LoginBox';

function LogoutForm({ onClick }) {
  return (
    <LoginForm>
      <h1>로그인 중</h1>
      <button
        type="button"
        onClick={onClick}
      >
        Log out
      </button>
    </LoginForm>
  );
}

export default React.memo(LogoutForm);
