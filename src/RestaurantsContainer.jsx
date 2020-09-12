import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

import {
  darkCharcoal,
  black,
} from './styles/constants';

const List = styled.ul({
  display: 'block',
  margin: '0em',
  padding: '.4em 0',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '0.4em',
  marginTop: '1em',
  borderBottomColor: darkCharcoal,
  '& a': {
    color: darkCharcoal,
    textDecoration: 'none',
    borderBottomColor: darkCharcoal,
    borderBottomStyle: 'inset',
    borderBottomWidth: 'thin',
    '&:hover': {
      fontWeight: 'bold',
      color: black,
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
