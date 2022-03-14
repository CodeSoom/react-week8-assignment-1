import React from 'react';

import List from './components/List';
import { checkDiffByKey } from './utils';

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <List>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </List>
  );
}

export default React.memo(MenuItems, (prevProps, nextProps) => {
  if (prevProps.menuItems.length !== nextProps.menuItems.length) {
    return false;
  }

  const isEqual = checkDiffByKey(prevProps.menuItems, nextProps.menuItems, 'id');

  return isEqual;
});
