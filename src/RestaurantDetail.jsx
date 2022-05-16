import { memo } from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Container = styled.div({
  margin: '1em',
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Container>
        <p>
          주소:
          {' '}
          {address}
        </p>
        <h3>메뉴</h3>
        <MenuItems menuItems={menuItems} />
      </Container>
    </div>
  );
}

export default memo(RestaurantDetail);
