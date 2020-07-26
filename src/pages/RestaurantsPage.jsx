import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantsContainer from '../containers/RestaurantsContainer';

import RestaurantsBox from '../styles/RestaurantsBox';
import Title from '../styles/Title';

import {
  loadInitialData,
} from '../redux/slice';

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
    <>
      <Title>Restaurants</Title>
      <RestaurantsBox>
        <RegionsContainer />
        <CategoriesContainer />
        <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
      </RestaurantsBox>
    </>
  );
}
