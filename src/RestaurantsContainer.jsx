import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const Subtitle = styled.h3({
  textAlign: 'center',
  fontSize: '25px',
  margin: '20px 0px 0px 0px',
  color: '#F9FDFC',
  opacity: '0.8',
});

const List = styled.ul({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
  padding: 0,
});

const Item = styled.li({
  margin: '10px',
  padding: '5px 15px',
  width: '150px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0px 0px 5px white',
  background: 'rgba(214, 200, 200, 0.5)',
  textAlign: 'center',
  fontFamily: '"Song Myung", serif',
  '& a': {
    color: '#F9FDFC',
    textDecoration: 'none',
    fontSize: '25px',
    '&:hover': {
      color: '#5B4230',
      fontWeight: '600',
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
    <>
      <Subtitle>Restaurants</Subtitle>
      <List>
        {restaurants.map((restaurant) => (
          <Item key={restaurant.id}>
            <a href="/restaurants/1" onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </Item>
        ))}
      </List>
    </>
  );
}
