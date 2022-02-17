import { css } from '@emotion/css';
import { useCallback, useMemo } from 'react';
import { ListGroup } from 'react-bootstrap';

import { useSelector } from 'react-redux';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(({ restaurant }) => restaurant.restaurants);

  const handleClick = useCallback((restaurant) => (event) => {
    event.preventDefault();
    onClickRestaurant(restaurant);
  }, [onClickRestaurant]);

  const restaurantsList = useMemo(() => restaurants.map((restaurant) => (
    <ListGroup.Item action key={restaurant.id}>
      <a
        className={css`
          display: block;
          width: 100%;
        `}
        href="/restaurants/1"
        onClick={handleClick(restaurant)}
      >
        {restaurant.name}
      </a>
    </ListGroup.Item>
  )), [restaurants, handleClick]);

  return (
    <ListGroup>
      {restaurantsList}
    </ListGroup>
  );
}
