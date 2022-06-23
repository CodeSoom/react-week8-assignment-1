/* eslint-disable react/button-has-type */

import React from 'react';

function Button({
  type = 'button', active, children, onClick,
}) {
  return (
    <button type={type} onClick={onClick}>
      {children}
      {active && '(V)'}
    </button>
  );
}

export default React.memo(Button);
