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
  flexDirection: 'column',
  alignItems: 'start',
});

const Detail = styled.div({
  fontSize: '24px',
  fontWeight: '500',
  marginBottom: '24px',
  '& p': {
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '12px',
  },
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <>
      <Title>{name}</Title>
      <Box>
        <Detail>
          주소/
          {' '}
          <p>{address}</p>
        </Detail>
        <Detail>
          메뉴/
          <p>
            <MenuItems menuItems={menuItems} />
          </p>
        </Detail>
      </Box>
    </>
  );
}

export default React.memo(RestaurantDetail);
