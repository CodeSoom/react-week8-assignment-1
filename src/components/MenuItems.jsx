import React, { memo } from 'react';
import { isEmpty } from 'lodash';

function MenuItems({ menuItems }) {
  if (isEmpty(menuItems)) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <ul>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </ul>
  );
}

export default memo(MenuItems);
