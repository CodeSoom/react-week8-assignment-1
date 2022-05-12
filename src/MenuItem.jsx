import { memo } from 'react';

function MenuItem({ name }) {
  return (
    <li>
      {name}
    </li>
  );
}

export default memo(MenuItem);
