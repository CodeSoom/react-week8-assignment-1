import React from 'react';
import { ListWrapper, Menu } from './style';

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <ListWrapper>
      {menuItems.map((menuItem) => (
        <Menu key={menuItem.id}>
          {menuItem.name}
        </Menu>
      ))}
    </ListWrapper>
  );
}
