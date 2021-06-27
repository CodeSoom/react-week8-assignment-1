import { useSelector } from 'react-redux';

import { get } from './utils';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: '.4em 0',
  margin: '0 auto',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: 'transparent',
    color: 'green',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
})

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  if (restaurants.length !== 0) {
    return (
      <p>식당을 선택하세요</p>
    )
  }

  return (
    <>
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
