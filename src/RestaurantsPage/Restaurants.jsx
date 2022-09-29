import { memo } from 'react';

const Restaurants = memo(({ restaurants, onClick }) => {
  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();

      onClick(restaurant);
    };
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a
            href={`/restaurants/${restaurant.id}`}
            onClick={handleClick(restaurant)}
          >
            {restaurant.name}
          </a>
        </li>
      ))}
    </ul>
  );
});

export default Restaurants;
