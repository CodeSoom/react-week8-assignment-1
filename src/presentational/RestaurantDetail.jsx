import React from 'react';

import MenuItems from './MenuItems';

import { Container, Title } from '../styled';

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <Title>{name}</Title>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </Container>
  );
}

export default React.memo(RestaurantDetail);
