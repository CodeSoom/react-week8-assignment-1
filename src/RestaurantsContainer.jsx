import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Noto Serif KR', serif",
  listStyle: 'none',
  borderRadius: '2em',
  backgroundColor: 'rgba(255,255,255,0.7)',
  backdropFilter: 'saturate(180%) blur(6px)',
  width: '40%',
  height: '80%',
  margin: '0',
  '& li': {
    fontSize: '1.5em',
    margin: '0.5em 0',
  },
  '& a': {
    textDecoration: 'none',
    color: '#000',
    fontWeight: '600',
    '&: hover': {
      color: '#CF423C',
    },
  },
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </List>
  );
}
