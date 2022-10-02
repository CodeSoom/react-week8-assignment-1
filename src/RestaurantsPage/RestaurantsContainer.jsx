import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import MenuContainer from '../styles/MenuContainer';

import { get } from '../utils';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get({
    page: 'restaurants',
    key: 'restaurants',
  }));

  return (
    <MenuContainer>
      <h3>맛집</h3>
      <Restaurants
        restaurants={restaurants}
        onClick={onClickRestaurant}
      />
    </MenuContainer>
  );
}
