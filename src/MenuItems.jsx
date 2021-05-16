import React from 'react';

import styled from '@emotion/styled';

const Items = styled.ul({
  marginBottom: '0.2rem',
  '& li': {
    marginBottom: '0.2rem',
    height: '2.5rem',
    fontWeight: 'bold',
  },
});

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <Items>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </Items>
  );
}
