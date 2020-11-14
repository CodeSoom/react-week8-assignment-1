import React from 'react';

import Form from '../styles/Form';
import Button from '../styles/Button';


function LogoutForm({ onClick }) {
  return (
    <Form>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </Form>
  );
}

export default React.memo(LogoutForm);
