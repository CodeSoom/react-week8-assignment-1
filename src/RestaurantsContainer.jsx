import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import Container from './styles/Container';
import List from './styles/List';
import Item from './styles/Item';

import { get } from './utils';

import { colors } from './designSystem';

const Link = styled.a({
  fontSize: '1em',
  padding: '.6em 2em',
  color: colors.white,
  backgroundColor: colors.highlight,
  borderRadius: '10px',
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    fontWeight: 'bold',
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
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <Item key={restaurant.id}>
            <Link href="/restaurants/1" onClick={handleClick(restaurant)}>
              {restaurant.name}
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}
