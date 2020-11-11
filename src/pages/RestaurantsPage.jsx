import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Container from '../styles/Container';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantsContainer from '../containers/RestaurantsContainer';

import {
  loadInitialData,
} from '../modules/slice';

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
    <Container>
      <h2>레스토랑 찾기</h2>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </Container>
  );
}
