import React from 'react';

import Button from './styles/Button';

function LogoutForm({ onClick }) {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </>
  );
}

export default React.memo(LogoutForm);
