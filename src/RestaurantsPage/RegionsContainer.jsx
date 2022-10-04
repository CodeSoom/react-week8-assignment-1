import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import MenuContainer from '../styles/MenuContainer';

import {
  selectRegion,
  loadRestaurants,
} from './restaurantsSlice';

import { get } from '../utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get({
    page: 'restaurants',
    key: 'regions',
  }));

  const selectedRegion = useSelector(get({
    page: 'restaurants',
    key: 'selectedRegion',
  }));

  const handleClick = useCallback((regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <MenuContainer>
      <h3>지역</h3>
      <Regions
        regions={regions}
        selectedRegion={selectedRegion}
        onClick={handleClick}
      />
    </MenuContainer>
  );
}
