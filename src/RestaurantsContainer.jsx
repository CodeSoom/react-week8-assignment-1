import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';


const Item = styled.li({
  width: '100%',
  height: '2.5rem',
  borderRadius: '1.2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  '& a': {
    textDecoration: 'none',
    textAlign: 'center',
    margin: '0',
  },
  marginBottom: '0.5rem',
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
    <ul>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Item>
      ))}
    </ul>
  );
}
