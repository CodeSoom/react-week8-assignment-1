import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import {
  loadInitialData,
} from './slice';

import ContentsWrap from './component/ContentsWrap';
import Title from './component/Title';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

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
    <ContentsWrap>
      <Title>레스토랑을 검색해보세요!</Title>
      <ListContainer>
        <RegionsContainer />
        <CategoriesContainer />
        <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
      </ListContainer>
    </ContentsWrap>
  );
}

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  > ul {
    margin-right: 1em;
    &:last-child {
      flex: 1 0 auto;
    }
  }
`;
