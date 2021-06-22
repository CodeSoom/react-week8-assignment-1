import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const RestaurantsList = styled.ul({
  margin: '0 auto',
  padding: '5em 0',
  listStyle: 'none',
});

const RestaurantsItem = styled.li({
  textAlign: 'center',
  margin: '1em auto',
  '& a': {
    color: '#55462b',
    textDecoration: 'none',
    '&:hover': {
      color: '#311800',
      fontWeight: '700',
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
    <RestaurantsList>
      {restaurants.map((restaurant) => (
        <RestaurantsItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </RestaurantsItem>
      ))}
    </RestaurantsList>
  );
}
