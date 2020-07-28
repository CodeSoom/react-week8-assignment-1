import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../components/restaurants/RegionsContainer';
import CategoriesContainer from '../components/restaurants/CategoriesContainer';
import RestaurantsContainer from '../components/restaurants/RestaurantsContainer';
import PageWrapper from '../components/PageWrapper';

import {
  loadInitialData,
} from '../slice';

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
    <PageWrapper>
      <h2>식당 검색</h2>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </PageWrapper>
  );
}
