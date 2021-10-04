import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import { get } from './utils';

const List = styled.ul({
  listStyle: 'none',
  width: '100%',
  margin: '20px 0px 0px 15px',
  padding: '0',
  display: 'grid',
  gap: '12px',
  gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 100px))',
});

const Item = styled.li({
  width: '100%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#EEE',
  borderRadius: '15px',
  '& a': {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: '#2ecc71',
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
