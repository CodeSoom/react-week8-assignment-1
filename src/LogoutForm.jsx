import React from 'react';

import SubmitButton from './SubmitButton';

export default function LogoutForm({ onClick }) {
  return (
    <>
      <SubmitButton
        type="button"
        onClick={onClick}
      >
        Log out
      </SubmitButton>
    </>
  );
}
