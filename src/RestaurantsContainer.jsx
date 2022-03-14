import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { get } from './utils';

const RestaurantList = styled.ul`
  margin-top: 32px;
  list-style: none;

  a {
    transition: all 0.3s ease-in-out;
  }
  a:hover {
    padding-left: 8px;
  }
`;

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
        <li key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </RestaurantList>
  );
}
