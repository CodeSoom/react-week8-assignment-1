import React from 'react';

import ItemList from './ItemList';
import Item from './Item';

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <ItemList>
      {menuItems.map((menuItem) => (
        <Item key={menuItem.id} textColor="black">
          {menuItem.name}
        </Item>
      ))}
    </ItemList>
  );
}
