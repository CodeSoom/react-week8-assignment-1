import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from '../../utils';

const List = styled.ul({
  borderTop: '1px solid #cccccc',
  padding: '8px 16px',
  display: 'flex',
});

const Item = styled.li({
  width: '180px',
  height: '180px',
  backgroundColor: '#A30F0F',
  border: '1px solid #A30F0F',
  borderRadius: '50%',
  margin: '12px',
  '& a': {
    display: 'block',
    fontSize: '1.4rem',
    fontFamily: 'Noto Sans KR',
    color: '#ffffff',
    padding: '30px',
    textAlign: 'center',
    transform: 'translateY(38px)',
  },
  '&:hover': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    backgroundColor: '#E6A721',
    border: '1px solid #E6A721',
  },
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get({ sliceName: 'restaurantSlice', key: 'restaurants' }));

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
