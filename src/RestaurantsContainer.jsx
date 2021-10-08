import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

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
    <Ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <RestaurantName
            href="/restaurants/1"
            onClick={handleClick(restaurant)}
          >
            {restaurant.name}
          </RestaurantName>
        </li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
`;

const RestaurantName = styled.a`
  font-size: 1.2em;
  color: rgb(255, 0, 0);
`;
