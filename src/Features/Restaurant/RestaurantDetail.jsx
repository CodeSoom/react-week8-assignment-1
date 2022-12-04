import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
  border: 2px solid #797979;
  border-radius: 42px;
  & h2{
    font-size: 2.8rem;
    margin-bottom: 1.3rem;
  }
  & h3{
    margin-top: 2.5rem;
  }
`;

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Wrapper>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>Menu</h3>
      <MenuItems menuItems={menuItems} />
    </Wrapper>
  );
}

export default React.memo(RestaurantDetail);
