import styled from '@emotion/styled';

import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../common/utils';

import { Container, Title } from '../styles/Common';

const Restaurants = styled.div({
  marginRight: '0.5em',
  display: 'flex',
  flexWrap: 'wrap',
});

const Restaurant = styled.div({
  padding: '1em',
  margin: '0.4em',
  borderRadius: '5%',
  textAlign: 'center',
  border: '1px solid #ff6659',
  backgroundColor: '#ff6659',
  '& a': {
    textDecoration: 'none',
    color: '#fff',
    '& span': {
      width: '100%',
      fontSize: '20px',
      color: '#eee',
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
      <Title>Restaurants</Title>
      <Restaurants>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id}>
            <a href={`/restaurants/${restaurant.id}`} onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </Restaurant>
        ))}
      </Restaurants>
    </Container>
  );
}
