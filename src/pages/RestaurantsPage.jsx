import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantsContainer from '../containers/RestaurantsContainer';

import {
  loadInitialData,
} from '../reducer';

const StyledRestaurantsPage = styled.div({
  width: '100%',
});

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
    <StyledRestaurantsPage>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </StyledRestaurantsPage>
  );
}
