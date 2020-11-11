import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { get } from './utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <Restaurants
      restaurants={restaurants}
      onClick={handleClick}
    />
  );
}
