import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';
import palette from '../../styles/palette';

const RestaurantDetailWrapper = styled.div({
  marginTop: '4rem',
  marginBottom: '5rem',
  padding: '2rem',
  border: '0.1rem solid #d7e2eb',
  borderRadius: '0.4rem',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& h2': {
    borderBottom: `2px solid ${palette.Teal[5]}`,
    width: '30%',
    textAlign: 'center',
    letterSpacing: '2px',
    fontSize: '3rem',
    padding: '1rem',
    marginBottom: '1rem',
  },
  '& p': {
    color: palette.gray[6],
    fontSize: '1.2rem',
  },
  '& h3': {
    textAlign: 'center',
    letterSpacing: '2px',
    fontSize: '1.5rem',
    padding: '1rem',
    marginBottom: '1rem',
  },
});


function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <RestaurantDetailWrapper>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </RestaurantDetailWrapper>
  );
}

export default RestaurantDetail;
