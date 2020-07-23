import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const StyledRestaurantDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RestaurantDetail = ({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <StyledRestaurantDetail>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </StyledRestaurantDetail>
  );
};

export default React.memo(RestaurantDetail);
