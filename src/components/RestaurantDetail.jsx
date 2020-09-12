import React from 'react';

import MenuItems from './MenuItems';
import SubName from '../styles/SubName';
import Text from '../styles/Text';

function RestaurantDetail({ restaurant }) {
  const { address, menuItems } = restaurant;

  return (
    <div>
      <SubName> 주소</SubName>
      <Text>{address}</Text>
      <SubName>메뉴</SubName>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}

export default RestaurantDetail;
