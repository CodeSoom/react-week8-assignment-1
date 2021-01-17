import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantsContainer from '../containers/RestaurantsContainer';

import {
  loadInitialData,
} from '../redux/slice';

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
    <>
      <div className="left">
        <h2>지역</h2>
        <RegionsContainer />

        <h2 style={{ marginTop: '20px' }}>먹고싶은 것</h2>
        <CategoriesContainer />
      </div>
      <div className="right">
        <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
      </div>
    </>
  );
}
