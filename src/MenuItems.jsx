import React from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
});

const Item = styled.li({
  textAlign: 'center',
  margin: '0px 7px',
  fontFamily: '"Song Myung", serif',
  fontSize: '20px',
  padding: '5px 0',
  width: '110px',
  borderRadius: '5px',
  border: 'none',
  boxShadow: '0px 0px 5px white',
  background: 'rgba(255, 255, 255, 0.5)',
  color: '#5B4230',
  textDecoration: 'none',
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
        <Item key={menuItem.id}>
          {menuItem.name}
        </Item>
      ))}
    </List>
  );
}
