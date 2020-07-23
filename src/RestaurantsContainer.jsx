import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const List = styled.ul({
  display: 'block',
  margin: '0em',
  padding: '.4em 0',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '0.4em',
  marginTop: '1em',
  borderBottomColor: '#333',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    borderBottomColor: '#333',
    borderBottomStyle: 'inset',
    borderBottomWidth: 'thin',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
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
