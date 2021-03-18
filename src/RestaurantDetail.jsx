import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Title = styled.h2({
  fontSize: '35px',
  margin: '10px 10px',
  padding: '5px',
  color: '#F9FDFC',
  fontFamily: '"Song Myung", serif',
});

const Text = styled.p({
  fontSize: '25px',
  color: '#F9FDFC',
  margin: '10px 20px',
  padding: '5px',
  fontFamily: '"Song Myung", serif',
});

const RestaurantDetailContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  borderBottom: '2px solid rgba(249, 253, 252, 0.5)',
});

const Subtitle = styled.h3({
  fontFamily: '"Song Myung", serif',
  fontSize: '30px',
  margin: '10px 20px',
  marginTop: '10px',
  color: '#F9FDFC',
  opacity: '0.8',
  textAlign: 'center',
});

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <RestaurantDetailContainer>
        <Title>{name}</Title>
        <Text>
          주소:
          {' '}
          {address}
        </Text>
      </RestaurantDetailContainer>
      <Subtitle>메뉴</Subtitle>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
