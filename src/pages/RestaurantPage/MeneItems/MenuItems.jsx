import React from 'react';

import styled from '@emotion/styled';

import { black, nightRider } from '@/styles/colors';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1rem',
  '& a': {
    textDecoration: 'none',
    color: nightRider,
    '&:hover': {
      fontWeight: 'bold',
      color: black,
    },
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
        <Item key={menuItem.id}>
          {menuItem.name}
        </Item>
      ))}
    </List>
  );
}

export default React.memo(MenuItems);

// export default MenuItems;
