import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const MenuList = styled.ul({
  display: 'flex',
  marginTop: '10vh',
  padding: '.4em 0',
  listStyle: 'none',
  justifyContent: 'center',
});

const MenuItem = styled.li({
  fontSize: '3vh',
  margin: '0 2vw',
  '& a': {
    color: 'rgb(212, 212, 212)',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(150, 150, 150)',
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
    <MenuList>
      {restaurants.map((restaurant) => (
        <MenuItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </MenuItem>
      ))}
    </MenuList>
  );
}
