import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from './features/restaurants/RegionsContainer';
import CategoriesContainer from './features/restaurants/CategoriesContainer';
import RestaurantsContainer from './features/restaurants/RestaurantsContainer';

import {
  loadInitialData,
} from './features/restaurants/restaurantsSlice';

export default function RestaurantsPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickRestaurant(restaurant) {
    const url = `/restaurants/${restaurant.id}`;
    history.push(url);
  }

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
