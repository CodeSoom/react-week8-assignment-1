import { useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from '../slice';

export default function RestaurantsPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  const handleClickRestaurant = useCallback((restaurant) => {
    const url = `/restaurants/${restaurant.id}`;
    navigate(url);
  }, []);

  return (
    <Wrapper>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;

    + ul {
      margin-top: 2rem;
    }
  }

  button {
    min-width: 4.2rem;
  }
`;
