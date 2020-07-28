import React from 'react';

import MenuItems from './MenuItems';
import ContentWrapper from '../ContentWrapper';

const RestaurantDetail = React.memo(({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <ContentWrapper>
        <p>
          주소:
          {' '}
          {address}
        </p>
        <h3>메뉴</h3>
        <MenuItems menuItems={menuItems} />
      </ContentWrapper>
    </div>
  );
});

export default RestaurantDetail;
