import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const List = styled.ul({
  listStyle: 'none',
  fontSize: '20px',
  textAlign: 'center',
  paddingLeft: '0px',
  '& li': {
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    '& a': {
      textDecoration: 'none',
      backgroundColor: 'teal',
      color: 'white',
      width: '70%',
      padding: '5px 0',
      borderRadius: '20px',
      border: '3px solid black',
    },
  },
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  const handleClick = useCallback((restaurant) => (event) => {
    event.preventDefault();
    onClickRestaurant(restaurant);
  }, [onClickRestaurant]);

  return (
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </List>
  );
}
