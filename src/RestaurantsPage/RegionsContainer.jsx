import { useDispatch, useSelector } from 'react-redux';

import { useCallback } from 'react';
import Regions from './Regions';

import {
  selectRegion,
  loadRestaurants,
} from './RestaurantsSlice';

import { get } from '../utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get({
    page: 'Restaurants',
    key: 'regions',
  }));

  const selectedRegion = useSelector(get({
    page: 'Restaurants',
    key: 'selectedRegion',
  }));

  const handleClick = useCallback((regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClick}
    />
  );
}
