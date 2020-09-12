import React from 'react';

import { DetailMenuItem, DetailMenuList } from '../styles';

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <DetailMenuList>
      {menuItems.map((menuItem) => (
        <DetailMenuItem key={menuItem.id}>
          <div>{menuItem.name}</div>
          <div> - 원</div>
        </DetailMenuItem>
      ))}
    </DetailMenuList>
  );
}

export default React.memo(MenuItems);
