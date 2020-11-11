import React from 'react';

import Title from './styles/Title';
import SubTitle from './styles/SubTitle';
import MenuItems from './MenuItems';

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <Title>{name}</Title>
      <SubTitle>주소</SubTitle>
      <p>
        {address}
      </p>
      <SubTitle>메뉴</SubTitle>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}

export default React.memo(RestaurantDetail);
