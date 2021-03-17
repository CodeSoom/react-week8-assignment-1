import React from 'react';

import MenuItems from './MenuItems';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontSize: '35px',
  margin: '30px 10px',
  padding: '10px 20px',
  borderBottom: '2px solid rgba(249, 253, 252, 0.5)',
  color: '#F9FDFC',
  fontFamily: '"Song Myung", serif',
});

const Text = styled.p({
  fontSize: '25px',
  color: '#F9FDFC',
  margin: '10px 20px',
  fontFamily: '"Song Myung", serif',
})

const Subtitle = styled.h3({
  fontFamily: '"Song Myung", serif',
  fontSize: '30px',
  margin: '10px 20px',
  marginTop: '30px',
  color: '#F9FDFC',
  opacity: '0.8',
  textAlign: 'center',
});

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <Title>{name}</Title>
      <Text>
        주소:
        {' '}
        {address}
      </Text>
      <Subtitle>메뉴</Subtitle>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
