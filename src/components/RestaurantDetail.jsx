import React from 'react';

import MenuItems from './MenuItems';

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}

export default React.memo(RestaurantDetail);
