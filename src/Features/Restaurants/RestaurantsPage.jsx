import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import RegionsContainer from '../Regions/RegionsContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from '../../slice';

const SubBanner = styled.div({
  // width: '100vw',
  height: '400px',
  background: 'url(../../../img/sub-bg1.png)',
  backgroundSize: 'cover',
  position: 'relative',

});

const SubDescription = styled.div({
  width: '90%',
  margin: '0 auto',
  position: 'absolute',
  left: '8rem',
  bottom: '6rem',

  '& h1': {
    color: '#ffffff',
    fontSize: '9rem',
    marginRight: '5rem',
    fontWeight: '800',
    position: 'relative',

    '&:after': {
      position: 'absolute',
      top: 0,
      left: '60rem',
      display: 'block',
      content: '""',
      width: '15px',
      height: '15px',
      backgroundColor: '#DB0816',
      borderRadius: '50px',
    },
  },

  '& p': {
    color: '#ffffff',
    fontWeight: '300',
    fontSize: '2.5rem',
  },
});

const Container = styled.div({
  width: '90%',
  margin: '0 auto',
  paddingTop: '7rem',

  '& h2': {
    fontSize: '3.5rem',
    marginBottom: '2rem',
  },

  '& p': {
    fontSize: '2rem',
    lineHeight: '1.5',
    marginBottom: '3rem',
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
    <div>
      <SubBanner>
        <SubDescription>
          <p>맛있는 발견의 즐거움을 당신에게 드립니다</p>
          <h1>Restaurants</h1>
        </SubDescription>
      </SubBanner>
      <Container>
        <RegionsContainer />
        <CategoriesContainer />
        <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
      </Container>
    </div>
  );
}
