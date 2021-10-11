import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './slice';

const Title = styled.h2({
  fontsize: '1.5em',
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
    <div>
      <Title>Restaurants</Title>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
