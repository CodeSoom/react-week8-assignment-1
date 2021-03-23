import React from 'react';

import MenuItems from './MenuItems';

import Wrapper from './Wrapper';

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Wrapper>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </Wrapper>
  );
}

export default React.memo(RestaurantDetail);
