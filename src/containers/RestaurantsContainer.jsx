import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import { get } from '../utils';

const RestaurantList = styled.li({
  padding: '.4em 0',
  listStyle: 'none',
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
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
    <ul>
      {restaurants.map((restaurant) => (
        <RestaurantList key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </RestaurantList>
      ))}
    </ul>
  );
}
