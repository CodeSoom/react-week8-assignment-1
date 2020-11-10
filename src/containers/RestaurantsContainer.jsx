import React from 'react';

import { useSelector } from 'react-redux';

import Container from '../styles/Container';

import { get } from '../modules/utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <Container>
      <h3>레스토랑 목록</h3>
      {(restaurants.length === 0) ? <p>레스토랑이 없습니다.</p>
        : (
          <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <a href="/restaurants/1" onClick={handleClick(restaurant)}>
                  {restaurant.name}
                </a>
              </li>
            ))}
          </ul>
        )}
    </Container>
  );
}
