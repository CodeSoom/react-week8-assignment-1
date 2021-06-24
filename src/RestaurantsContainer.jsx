import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { get } from './utils';

const Restaurants = styled.ul({
  display: 'flex',
  margin: '20px 0',
  '& li': {
    marginRight: '5px',
    '& a': {
      display: 'block',
      textDecoration: 'none',
      background: '#ffc107',
      color: '#212529',
      margin: 0,
      padding: '8px 16px',
      fontSize: '16px',
      textAlign: 'center',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      cursor: 'pointer',
      transition: '0.5s',
      '&:active, &:hover, &:focus': {
        background: '#e0a800',
        outline: 0,
      },
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
    <Restaurants>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </Restaurants>
  );
}
