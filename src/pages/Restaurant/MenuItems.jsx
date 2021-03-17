import React from 'react';

import styled from '@emotion/styled';

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
          <MenuList key={id}>
            {name}
          </MenuList>
        ))}
      </ul>
    </MenuItemWrapper>
  );
});

const MenuItemWrapper = styled.ul({
  textAlign: 'left',
});

const MenuList = styled.li({
  padding: '0 .5rem',
  listStyle: 'inside',
  color: '#666666',
});

export default MenuItems;
