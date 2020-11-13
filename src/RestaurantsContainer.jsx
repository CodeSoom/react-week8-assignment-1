import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const List = styled.ul({
  marginTop: '1rem',
  listStyle: 'none',
  '& a': {
    fontWeight: '500',
    display: 'block',
    padding: '.5rem',
    paddingBottom: '1rem',
    border: '.5px solid #CCCCCC',
    borderRadius: '3px',
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    textDecoration: 'none',
    color: '#333333',
    transition: 'all .15s',
    '&:hover': {
      color: '#EEEEEE',
    },
    '& p': {
      marginTop: '.5rem',
      fontSize: '1.5rem',
      color: '#666666',
      fontWeight: '400',
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
            <p>
              {restaurant.address}
            </p>
          </a>
        </li>
      ))}
    </List>
  );
}
