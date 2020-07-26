import React from 'react';

import LoginBox from '../styles/LoginBox';
import Button from '../styles/Button';

export default function LogoutForm({ onClick }) {
  return (
    <LoginBox>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </LoginBox>
  );
}
