import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import Container from '../../styles/Container';

import RegionsContainer from '../Regions/RegionsContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from '../../slice';

const Wrapper = styled.div`
  background-color:#283c50;
  &>div{
    padding-top: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  color: #c7c7c7;
  margin: 3rem 0 0.7rem 0;
`;

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
    <Wrapper>
      <Container>
        <Title>
          🚩 지역을 선택해요
        </Title>
        <RegionsContainer />
        <Title>
          👨‍🍳 음식 종류를 선택해요
        </Title>
        <CategoriesContainer />
        <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
      </Container>
    </Wrapper>
  );
}
