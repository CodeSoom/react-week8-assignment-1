import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Restaurants from './Restaurants';

import { get } from './utils';

const RestaurantsArea = styled.article({
  '& h3': {
    color: '#3c4348',
  },
  '& p': {
    color: '#8b9aa7',
  },
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <RestaurantsArea>
      <h3>레스토랑</h3>
      {restaurants.length ? (
        <Restaurants
          restaurants={restaurants}
          onClick={handleClick}
        />
      ) : (
        <p>지역과 카테고리를 선택해주세요!!!</p>
      )}
    </RestaurantsArea>
  );
}
