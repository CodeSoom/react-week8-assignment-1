import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { get } from '../utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get({
    page: 'restaurants',
    key: 'restaurants',
  }));

  return (
    <Restaurants
      restaurants={restaurants}
      onClick={onClickRestaurant}
    />
  );
}
