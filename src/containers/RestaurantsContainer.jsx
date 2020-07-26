import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils/utils';

import ResultList from '../styles/ResultList';
import ResultItem from '../styles/ResultItem';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <ResultList>
      {restaurants.map((restaurant) => (
        <ResultItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </ResultItem>
      ))}
    </ResultList>
  );
}
