import React from 'react';

import styled from '@emotion/styled';

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  const Menu = styled.ul({
    display: 'flex',
    marginTop: '0.8rem',
    padding: '1rem',
    borderRadius: '1rem',
    background: '#fff',
  });

  const MenuItem = styled.li({
    flex: '1',
    textAlign: 'center',
    '& + &': {
      borderLeft: '1px solid #dcdcdc',
    },
  });


  return (
    <Menu>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          <span>{menuItem.name}</span>
        </MenuItem>
      ))}
    </Menu>
  );
}
