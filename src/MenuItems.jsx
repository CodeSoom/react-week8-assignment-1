import React from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  listStyle: 'none',
  padding: '0 2em',
});

const Item = styled.li(() => ({
  color: 'gray',
}));

export default function MenuItems({ menuItems }) {
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
