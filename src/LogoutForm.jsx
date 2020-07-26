import React from 'react';


const LogoutForm = React.memo(({ onClick }) => (
  <>
    <button
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  </>
));

export default LogoutForm;
