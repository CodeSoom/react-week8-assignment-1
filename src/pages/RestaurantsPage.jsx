import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../components/RegionsContainer';
import CategoriesContainer from '../components/CategoriesContainer';
import RestaurantsContainer from '../components/RestaurantsContainer';

import {
  loadInitialData,
} from '../slice';

import { MenuContainer } from '../styles';

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
    <MenuContainer>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </MenuContainer>
  );
}
