import React from 'react';

import styled from '@emotion/styled';

import MenuItemSVG from '../../styles/MenuItemSVG';

const MenuItemWrapper = styled.ul({
  textAlign: 'left',
});

const MenuItem = styled.li({
  // Box Model Properties
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 .5rem',
  width: '25%',

  // Visual Properties
  color: '#666666',
});

const MenuItems = React.memo(({ menuItems }) => {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <MenuItemWrapper>
      <ul>
        {menuItems.map(({ id, name }) => (
          <MenuItem key={id}>
            <MenuItemSVG />
            {name}
          </MenuItem>
        ))}
      </ul>
    </MenuItemWrapper>
  );
});

export default MenuItems;
