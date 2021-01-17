import React, { useEffect, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './slice';

const Container = styled.article({
  display: 'grid',
  gridTemplateRows: '1fr 4fr',
  height: '100%',
  '& div': {
    padding: '.5em 1em',
  },
  '& h4': {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifySelf: 'center',
    alignSelf: 'center',
  },
});

const SelectContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 4fr',
});

const ListContainer = styled.div({
  backgroundColor: '#d3d9e0',
  textAlign: 'center',
  maxHeight: '380px',
  overflow: 'auto',
});

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
    <Container>
      <SelectContainer>
        <RegionsContainer />
        <CategoriesContainer />
      </SelectContainer>
      <ListContainer>
        <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
      </ListContainer>
    </Container>
  );
}
