import React from 'react';

import { Button } from '../styles';

function LogoutForm({ onClick }) {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
      >
        Log Out
      </Button>
    </>
  );
}

export default React.memo(LogoutForm);
