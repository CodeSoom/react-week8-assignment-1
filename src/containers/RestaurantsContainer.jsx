import { useSelector } from 'react-redux';

import { get } from '../utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <>
      <h2>Restaurants</h2>
      {restaurants.length ? (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <a href="/restaurants/1" onClick={handleClick(restaurant)}>
                {restaurant.name}
              </a>
            </li>
          ))}
        </ul>
      ) : <p>레스토랑이 존재하지 않습니다.</p>}
    </>
  );
}
