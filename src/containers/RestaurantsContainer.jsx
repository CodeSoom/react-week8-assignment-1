import React from 'react';

import { useSelector } from 'react-redux';

import SubContainer from '../styles/SubContainer';
import RestaurantList from '../styles/RestaurantList';
import RestaurantItem from '../styles/RestaurantItem';

import { get } from '../modules/utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  const isEmpty = (arr) => arr.length === 0;

  if (isEmpty(restaurants ?? [])) {
    return (
      <SubContainer>
        <h3>레스토랑 목록</h3>
        <p>레스토랑이 없습니다.</p>
      </SubContainer>
    );
  }

  return (
    <SubContainer>
      <h3>레스토랑 목록</h3>
      <RestaurantList>
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id}>
            <a href={`/restaurants/${restaurant.id}`} onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </RestaurantItem>
        ))}
      </RestaurantList>
    </SubContainer>
  );
}
