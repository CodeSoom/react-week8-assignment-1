import React from 'react';

import MenuItems from './MenuItems';

import { DetailHeader, DetailAddress } from '../styles';

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <DetailHeader>{name}</DetailHeader>
      <DetailAddress>
        주소:
        {' '}
        {address}
      </DetailAddress>
      <h3>Menu</h3>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}

export default React.memo(RestaurantDetail);
