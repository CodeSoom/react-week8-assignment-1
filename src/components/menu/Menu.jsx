import React from 'react';

import MenuItem from '../../lib/styles/MenuItem';

const Menu = ({ name, onClick, check }) => (
  <MenuItem
    active={check}
  >
    <button type="button" onClick={onClick}>
      {name}
      {check && '(V)'}
    </button>
  </MenuItem>
);

export default React.memo(Menu);
