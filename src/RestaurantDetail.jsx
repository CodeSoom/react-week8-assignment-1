import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Detail = styled.div({
  paddingLeft: '20px',
  '& h2': {
    fontSize: '30px',
    textAlign: 'center',
    paddingRight: '20px',
  },
});

const RestaurantDetail = ({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <Detail>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </Detail>
  );
};

export default React.memo(RestaurantDetail);
