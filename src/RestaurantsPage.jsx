import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './slice';

import Container from './styles/Container';

const TopBox = styled.div({
  position: 'fixed',
  top: '100px',
});

const BottomBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: '50%',
  '& ul': {
    display: 'flex',
  },
  '& li': {
    marginRight: '48px',
    fontWeight: '700',
    fontSize: '36px',
  },
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
      <TopBox>
        <RegionsContainer />
        <CategoriesContainer />
      </TopBox>
      <BottomBox>
        <RestaurantsContainer
          onClickRestaurant={handleClickRestaurant}
        />
      </BottomBox>
    </Container>
  );
}
