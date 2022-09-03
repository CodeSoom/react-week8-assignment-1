import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from './utils';

const RestaurantList = styled.ul({
  width: '100%',
  display: 'flex',
  marginTop: '20px',
  marginLeft: '10px',
});

const RestaurantItem = styled.li({
  width: '100px',
  height: '50px',
  border: '1px solid #CCC',
  borderRadius: '3px',
  marginRight: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#EEE',
    borderColor: '#333',
  },
  '& a': {
    textDecoration: 'none',
    color: '#333',
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
    <RestaurantList>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </RestaurantItem>
      ))}
    </RestaurantList>
  );
}
