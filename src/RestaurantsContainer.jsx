import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import MenuList from './MenuList';
import MenuItem from './MenuItem';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <MenuList>
      {restaurants.map((restaurant) => (
        <MenuItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </MenuItem>
      ))}
    </MenuList>
  );
}
