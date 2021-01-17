import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';

import List from '../layouts/List';
import Item from '../layouts/Item';

import { get } from '../utils/utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  const handleClick = useCallback((restaurant) => (event) => {
    event.preventDefault();
    onClickRestaurant(restaurant);
  }, []);

  return (
    <List>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Item>
      ))}
    </List>
  );
}
