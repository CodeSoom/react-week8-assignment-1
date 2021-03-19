import React from 'react';

import styled from '@emotion/styled';

import { MenuItemSvg } from '../../commons/svg';
import { colors } from '../../styles/Theme';

const MenuItemWrapper = styled.ul({
  textAlign: 'left',
});

const MenuItem = styled.li({
  // Box Model Properties
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '25%',
  margin: '.5rem 0',

  // Visual Properties
  color: colors.gray,
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
            <MenuItemSvg />
            {name}
          </MenuItem>
        ))}
      </ul>
    </MenuItemWrapper>
  );
});

export default MenuItems;
