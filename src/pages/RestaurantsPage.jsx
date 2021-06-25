import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../components/RegionsContainer';
import CategoriesContainer from '../components/CategoriesContainer';
import RestaurantsContainer from '../components/RestaurantsContainer';

import {
  loadInitialData,
} from '../redux_modules/asyncActions';

export default function RestaurantsPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickRestaurant({ id }) {
    const url = `/restaurants/${id}`;
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
