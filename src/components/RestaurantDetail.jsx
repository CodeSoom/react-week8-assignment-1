import React, { memo } from 'react';

import MenuItems from './MenuItems';

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <address style={{ marginBottom: '40px' }}>
        {address}
      </address>

      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </>
  );
}

export default memo(RestaurantDetail);
