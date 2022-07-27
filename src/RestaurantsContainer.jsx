import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <StyledRestaurants>
      {restaurants.map((restaurant) => (
        <StyledRestaurant key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </StyledRestaurant>
      ))}
    </StyledRestaurants>
  );
}

const StyledRestaurants = styled.ul({
  display: 'flex',
  flexDirection: 'column',

  margin: '0',
  padding: '30px 0',
  borderTop: '1px solid skyblue',

  listStyle: 'none',
});

const StyledRestaurant = styled.li(() => ({
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '10px',

  background: 'skyblue',
  '& a': {
    color: 'white',
    textDecoration: 'none',
  },
}));
