import React from 'react';

import MenuItem from './MenuItem';

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <ul>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          {menuItem.name}
        </MenuItem>
      ))}
    </ul>
  );
}

export default React.memo(MenuItems);
