import styled from '@emotion/styled';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  const handleClick = useCallback((restaurant) => (event) => {
    event.preventDefault();
    onClickRestaurant(restaurant);
  }, [restaurants]);

  return (
    <Restaurants>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Restaurant>
      ))}
    </Restaurants>
  );
}

const Restaurants = styled.ul({
  display: 'flex',
  flexDirection: 'column',

  margin: '0',
  padding: '30px 0',
  borderTop: '1px solid #B2EBF4',

  listStyle: 'none',
});

const Restaurant = styled.li(() => ({
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '10px',
  background: '#B2EBF4',
  '& a': {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
}));
