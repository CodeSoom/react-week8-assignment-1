import { memo } from 'react';

export default memo(({ onClick }) => (
  <>
    <button
      type="button"
      onClick={onClick}
    >
      Log out
    </button>
  </>
));
