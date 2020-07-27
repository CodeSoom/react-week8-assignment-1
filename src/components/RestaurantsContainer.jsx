import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';

import { FilterMenuList, FilterMenuItem } from '../styles';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <FilterMenuList>
      {restaurants.map((restaurant) => (
        <FilterMenuItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </FilterMenuItem>
      ))}
    </FilterMenuList>
  );
}
