import React from 'react';

import styled from '@emotion/styled';

import MenuList from './MenuList';

const MenuItem = styled.li({
  marginRight: '1em',
  marginBottom: '1em',
  fontWeight: 'bold',
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <MenuList>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          {menuItem.name}
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default React.memo(MenuItem);
