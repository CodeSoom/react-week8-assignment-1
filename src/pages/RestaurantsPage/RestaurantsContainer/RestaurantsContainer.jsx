import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { selectRestaurants } from '@/store/restaurantsSlice';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: '1rem',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1rem',
  '& a': {
    color: '#333333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
  },
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(selectRestaurants);

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <List>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Item>
      ))}
    </List>
  );
}
