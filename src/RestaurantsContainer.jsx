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
    <ResultList>
      {restaurants.map((restaurant) => (
        <ResultItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </ResultItem>
      ))}
    </ResultList>
  );
}

const ResultList = styled.ol({
  padding: 0,
  marginRight: 0,
  marginLeft: '3em',
});

const ResultItem = styled.li({
  padding: '0.2em 0',
  '> a': {
    textDecoration: 'none',
  },
});
