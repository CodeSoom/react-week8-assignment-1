import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import { get } from './utils';

const List = styled.ul({
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '2.5em',
  padding: '1em 0',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      color: 'deeppink',
      fontWeight: 'bold',
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
        <Item key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Item>
      ))}
    </List>
  );
}
