import React from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  marginBottom: '1em',
  padding: 0,
  listStyle: 'none',
});

export default function MenuItems({ menuItems }) {
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
