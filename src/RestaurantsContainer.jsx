import { useSelector } from 'react-redux';

import { restaurantsSelector } from './features/restaurants/restaurantsSlice';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(restaurantsSelector);

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  if (!restaurants?.length) {
    return (
      <p>
        레스토랑 목록을 조회하지 못했습니다.
      </p>
    );
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href={`/restaurants/${restaurant.id}`} onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
