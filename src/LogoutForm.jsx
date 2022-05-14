import { memo } from 'react';

const LogoutForm = memo(({ onClick }) => (
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
