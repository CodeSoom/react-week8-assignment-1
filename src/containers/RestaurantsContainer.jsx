import { useSelector } from 'react-redux';

import { get } from '../utils';

import List from '../components/List.style';
import Item from '../components/Item.style';

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
        <List>
          {restaurants.map((restaurant) => (
            <Item key={restaurant.id}>
              <a href="/restaurants/1" onClick={handleClick(restaurant)}>
                {restaurant.name}
              </a>
            </Item>
          ))}
        </List>
      ) : <p>레스토랑이 존재하지 않습니다.</p>}
    </>
  );
}
