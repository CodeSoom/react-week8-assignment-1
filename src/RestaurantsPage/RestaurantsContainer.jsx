import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { get } from '../utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get({
    page: 'Restaurants',
    key: 'restaurants',
  }));

  return (
    <Restaurants
      restaurants={restaurants}
      onClick={onClickRestaurant}
    />
  );
}
