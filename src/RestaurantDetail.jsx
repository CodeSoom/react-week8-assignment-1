import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Detail = styled.div({
  '& h2': {
    fontSize: '2.5em',
  },
  '& h3': {
    fontSize: '1.8em',
  },
  '& p': {
    margin: '0',
    paddingLeft: '1em',
    fontSize: '1.2em',
  },
});

const RestaurantDetail = React.memo(({ restaurant }) => {
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
});

export default RestaurantDetail;
