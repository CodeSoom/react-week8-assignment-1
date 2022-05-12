import { useSelector } from 'react-redux';

import styled from '@emotion/styled';
import { get } from './utils';

const List = styled.li`
  listStyle: none;
`;

const A = styled.a({
  color: 'hotpink',
  textDecoration: 'none',
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
    <ul>
      {restaurants.map((restaurant) => (
        <List key={restaurant.id}>
          <A href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </A>
        </List>
      ))}
    </ul>
  );
}
