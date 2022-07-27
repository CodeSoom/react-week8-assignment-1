import { useSelector } from 'react-redux';

import { selectRestaurants } from '@/store/restaurantsSlice';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(selectRestaurants);

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
