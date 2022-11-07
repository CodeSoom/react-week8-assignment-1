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
      <ol>
        {restaurants.map((restaurant) => (
          <ResultItem key={restaurant.id}>
            <a href="/restaurants/1" onClick={handleClick(restaurant)}>
              {restaurant.name}
            </a>
          </ResultItem>
        ))}
      </ol>
    </ResultList>
  );
}

const ResultList = styled.div`
  padding: 32px 0 0;
  > ol {
    margin: 0;
  }
`;

const ResultItem = styled.li`
  padding: 0.2em 0;
  > a {
    text-decoration: none;
  }
`;
