import React from 'react';

import styled from '@emotion/styled';
import MenuItems from './MenuItems';


function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  const Restaurant = styled.div({
    h2: {
      textAlign: 'center',
      padding: '0.5em',
      fontSize: '1.5rem',
      border: '1px solid #dcdcdc',
    },
    h3: {
      fontSize: '1.3rem',
    },
    '& > * + *': {
      marginTop: '1rem',
    },
  });

  return (
    <Restaurant>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </Restaurant>
  );
}

export default React.memo(RestaurantDetail);
