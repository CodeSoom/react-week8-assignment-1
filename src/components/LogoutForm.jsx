import React from 'react';

import StyledSubmitButton from './StyledSubmitButton';

export default function LogoutForm({ onClick }) {
  return (
    <>
      <StyledSubmitButton
        type="button"
        onClick={onClick}
      >
        Log out
      </StyledSubmitButton>
    </>
  );
}
