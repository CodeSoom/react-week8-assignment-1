import React from 'react';

import { LoginButton } from '../styles';

function LogoutForm({ onClick }) {
  return (
    <>
      <LoginButton
        type="button"
        onClick={onClick}
      >
        Log out
      </LoginButton>
    </>
  );
}

export default React.memo(LogoutForm);
