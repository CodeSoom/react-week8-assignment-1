import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './slice';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontSize: '35px',
  margin: '30px 10px',
  padding: '10px 20px',
  borderBottom: '2px solid rgba(249, 253, 252, 0.5)',
  color: '#F9FDFC',
});

const Subtitle = styled.h3({
  textAlign: 'center',
  fontSize: '25px',
  margin: '20px 0px 0px 0px',
  color: '#F9FDFC',
  opacity: '0.8',
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
      <Subtitle>Regions</Subtitle>
      <RegionsContainer />
      <Subtitle>Categories</Subtitle>
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
