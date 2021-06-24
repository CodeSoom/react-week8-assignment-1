import { memo } from 'react';

function LogoutForm({ onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
      >
        Log out
      </button>
    </>
  );
}
export default memo(LogoutForm);
