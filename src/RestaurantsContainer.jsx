import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import { get } from './utils';

const List = styled.ul({
  margin: '1.2em 0px 0px 1em',
  padding: '0',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(4em, 8em))',
  gap: '1em',
  listStyle: 'none',
});

const Item = styled.li({
  borderRadius: '.5em',
  width: '100%',
  height: '3em',
  backgroundColor: '#EEE',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
