import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const List = styled.ul({
  listStyle: 'none',
  '& a': {
    display: 'block',
    padding: '.5rem',
    paddingBottom: '3rem',
    border: '1px solid gray',
    marginBottom: '1rem',
    fontSize: '1.8rem',
    textDecoration: 'none',
    color: '#111111',
    transition: 'all .15s',
    '&:hover': {
      color: '#EEEEEE',
    },
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
