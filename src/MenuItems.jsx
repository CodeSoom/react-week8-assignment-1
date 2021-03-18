import React from 'react';

import styeld from '@emotion/styled';

import { markerStyle } from './designSystem';

const List = styeld.ul({
  marginLeft: '.5em',
  '& li': {
    ...markerStyle,
  },
});

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

export default React.memo(MenuItems);
