import { useSelector } from 'react-redux';

import { get } from '../../utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get({ sliceName: 'restaurantSlice', key: 'restaurants' }));

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
