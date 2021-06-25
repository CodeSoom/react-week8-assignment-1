import { useSelector } from 'react-redux';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector((state) => state.restaurant.restaurants);

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <ul>
      {restaurants.map((restaurant) => {
        const { id, name } = restaurant;

        return (
          <li key={id}>
            <a href="/restaurants/1" onClick={handleClick(restaurant)}>
              {name}
            </a>
          </li>
        );
      })}

    </ul>
  );
}
