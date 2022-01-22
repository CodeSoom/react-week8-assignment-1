import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Title = styled.h2({
  fontSize: '36px',
  fontWeight: '700',
  marginBottom: '24px',
});

const Box = styled.div({
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  marginBottom: '24px',
});

const Detail = styled.p({
  fontSize: '18px',
  fontWeight: '500',
  marginBottom: '12px',
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <>
      <Title>{name}</Title>
      <Box>
        <Detail>
          주소:
          {' '}
          {address}
        </Detail>
        <Detail>
          메뉴:
        </Detail>
        {' '}
        <MenuItems menuItems={menuItems} />
      </Box>
    </>
  );
}

export default React.memo(RestaurantDetail);
