import { useCallback } from 'react';
import { useMemo } from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(({ restaurant }) => restaurant.restaurants);

  const handleClick = useCallback((restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }, [onClickRestaurant]);

  const restaurantsList = useMemo(() => restaurants.map((restaurant) => (
    <li key={restaurant.id}>
      <a href="/restaurants/1" onClick={handleClick(restaurant)}>
        {restaurant.name}
      </a>
    </li>
  )), [restaurants, handleClick]);

  return (
    <ul>
      {restaurantsList}
    </ul>
  );
}
