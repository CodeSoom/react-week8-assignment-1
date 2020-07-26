import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const HorizontalList = styled.ul({
  display: 'flex',
  listStyle: 'none',
});

const MenuTitle = styled.h3({
  backgroundColor: '#32e0c4',
  color: '#393e46',
  fontSize: '2em',
  padding: '1em 1em',
});

const Address = styled.p({
  marginTop: '1.5em',
  marginLeft: '3em',
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Address>
        주소:
        {' '}
        {address}
      </Address>
      <HorizontalList>
        <MenuTitle>메뉴</MenuTitle>
        <MenuItems menuItems={menuItems} />
      </HorizontalList>
    </div>
  );
}

export default React.memo(RestaurantDetail);
