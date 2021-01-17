import React from 'react';

import styled from '@emotion/styled';
import palette from '../../styles/palette';

const MenuListWrapper = styled.ul({
  margin: 0,
  padding: '.4em 0',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
});

const MenuItemWrapper = styled.ul({
  padding: '0 1rem',
  marginBottom: '.5rem',
  height: '36px',
  lineHeight: '36px',
  textAlign: 'center',
  fontSize: '.875rem',
  fontWeight: '700',
  color: palette.gray[6],
  borderRadius: '20px',
  boxShadow: `inset 0 0 0 2px ${palette.gray[3]}`,
  backgroundColor: 'white',
  cursor: 'pointer',
  '&:hover': {
    color: palette.Teal[5],
    transitionDuration: '.5s',
    boxShadow: `inset 0 0 0 2px ${palette.Teal[3]}`,
  },
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <MenuListWrapper>
      {menuItems.map((menuItem) => (
        <MenuItemWrapper key={menuItem.id}>
          {menuItem.name}
        </MenuItemWrapper>
      ))}
    </MenuListWrapper>
  );
}

export default MenuItems;
