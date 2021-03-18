import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';
import { ListWrapper, Restaurant } from './style';

import { get } from './utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  const handleClick = useCallback((restaurant) => (event) => {
    event.preventDefault();
    onClickRestaurant(restaurant);
  }, []);

  return (
    <ListWrapper>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          color="default"
        >
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Restaurant>
      ))}
    </ListWrapper>
  );
}
