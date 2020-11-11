import React from 'react';

import { useSelector } from 'react-redux';

import MenuList from './styles/MenuList';
import MenuItem from './styles/MenuItem';

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
    <MenuList>
      {restaurants.map((restaurant) => (
        <MenuItem key={restaurant.id}>
          <button type="button" onClick={handleClick(restaurant)}>
            <a href="/restaurants/1">
              {restaurant.name}
            </a>
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
