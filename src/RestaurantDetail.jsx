import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

import RestaurantBox from './styles/RestaurantBox';

const Title = styled.h2({
  fontSize: '36px',
  fontWeight: '700',
  marginBottom: '24px',
});

const Address = styled.h2({
  fontSize: '24px',
  fontWeight: '700',
  marginBottom: '36px',
  '& p': {
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '12px',
  },
});

const Menu = styled.h2({
  fontSize: '24px',
  fontWeight: '700',
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <>
      <Title>{name}</Title>
      <RestaurantBox>
        <Address>
          📪 주소
          {' '}
          <p>{address}</p>
        </Address>
        <Menu>
          🍲 메뉴
        </Menu>
        {' '}
        <p>
          <MenuItems menuItems={menuItems} />
        </p>
      </RestaurantBox>
    </>
  );
}

export default React.memo(RestaurantDetail);
