import React from 'react';

import { useSelector } from 'react-redux';
import List from './List';
import ListItem from './ListItem';
import ListWrap from './ListWrap';

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
    <ListWrap>
      <List>
        {restaurants.map((restaurant) => (
          <ListItem key={restaurant.id} type="card">
            <a href="/restaurants/1" onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </ListItem>
        ))}
      </List>
    </ListWrap>
  );
}
