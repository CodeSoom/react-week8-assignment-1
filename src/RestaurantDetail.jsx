import React from 'react';

import MenuItems from './MenuItems';

import Details from './Details';

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Details>
      <h2>{name}</h2>
      <p>
        {address}
      </p>
      <h3>대표메뉴</h3>
      <hr />
      <MenuItems menuItems={menuItems} />
    </Details>
  );
}

export default React.memo(RestaurantDetail);
