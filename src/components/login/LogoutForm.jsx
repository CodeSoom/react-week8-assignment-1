import React from 'react';

import Button from '../Button';

const LogoutForm = React.memo(({ onClick }) => (
  <>
    <Button
      type="button"
      onClick={onClick}
    >
      Log out
    </Button>
  </>
));

export default LogoutForm;
