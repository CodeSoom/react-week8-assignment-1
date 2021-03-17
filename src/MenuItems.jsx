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
    marginBottom: '1rem',
  });

  const MenuItem = styled.li({
    display: 'flex',
    flex: 1,
    padding: '1em',
    height: '10em',
    textAlign: 'center',
    background: '#E0E3DA',
    borderRadius: '0.5rem',
    '& + &': {
      marginLeft: '1rem',
    },
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      height: '6em',
      width: '6em',
      fontSize: '1.2rem',
      background: '#fff',
      borderRadius: '50%',
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
