import React, { useEffect, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantsContainer from '../containers/RestaurantsContainer';

import {
  loadInitialData,
} from '../store/actions';

export default function RestaurantsPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  const handleClickRestaurant = useCallback((restaurant) => {
    const url = `/restaurants/${restaurant.id}`;
    history.push(url);
  }, [history]);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
