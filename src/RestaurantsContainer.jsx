import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';


export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  const MenuContainer = styled.ul({
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
  });

  const MenuItem = styled.li({
    marginRight: '2em',
    '& a': {
      color: '#FFF5BA',
      backgroundColor: '#FFABAB',
      textDecoration: 'none',
      border: 0,
      borderRadius: 5,
      cursor: 'pointer',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: '#FFABAB',
      backgroundColor: '#F3FFE3',
    },
    '&:active': {
      color: '#B28DFF',
      backgroundColor: '#DCD3FF',
      textDecoration: 'none',
    },
  });

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <MenuContainer>
      {restaurants.map((restaurant) => (
        <MenuItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}
