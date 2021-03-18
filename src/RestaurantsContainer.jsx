import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import { get } from './utils';

import { colors } from './designSystem';

const Container = styled.div({
  margin: 0,
  padding: '2em 3em',
});

const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
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
            <a href="/restaurants/1" onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </Item>
        ))}
      </List>
    </Container>
  );
}
