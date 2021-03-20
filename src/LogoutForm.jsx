import React from 'react';

import { Button, InputWrapper } from './InputStyles';

export default function LogoutForm({ onClick }) {
  return (
    <>
      <InputWrapper>
        <Button
          type="button"
          onClick={onClick}
        >
          Log out
        </Button>
      </InputWrapper>
    </>
  );
}
