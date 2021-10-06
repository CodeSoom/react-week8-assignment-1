import React from 'react';

import FormButton from './FormButton';

function LogoutForm({ onClick }) {
  return (
    <>
      <FormButton
        type="button"
        onClick={onClick}
      >
        Log out
      </FormButton>
    </>
  );
}

export default React.memo(LogoutForm);
