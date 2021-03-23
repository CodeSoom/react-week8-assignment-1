import React from 'react';

import Button from './Button';
import InputWrapper from './InputWrapper';

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
