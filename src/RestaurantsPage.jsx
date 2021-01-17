import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
import Container from './Container';

import {
  loadInitialData,
} from './slice';

const RestaurnatBox = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '60%',
  height: '60%',
  color: '#fff',
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
    <Container>
      <RestaurnatBox>
        <RegionsContainer />
        <CategoriesContainer />
        <RestaurantsContainer
          onClickRestaurant={handleClickRestaurant}
        />
      </RestaurnatBox>
    </Container>
  );
}
