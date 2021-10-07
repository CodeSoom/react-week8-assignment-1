import { memo } from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Container = styled.div({
  marginBottom: '1em',
  borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
});

const RestaurantDetail = memo(({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </Container>
  );
});

export default RestaurantDetail;
