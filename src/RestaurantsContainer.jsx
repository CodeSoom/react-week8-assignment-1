import { useSelector } from 'react-redux';

import { get } from './utils';

import Menu from './Menu';
import MenuItem from './MenuItem';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <Menu>
      {restaurants.map((restaurant) => (
        <MenuItem key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </MenuItem>
      ))}
    </Menu>
  );
}
