import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../../lib/reducers/slice';

import { get } from '../../lib/utils';

import MenuTypesList from '../../components/restaurants/MenuTypesList';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  const handleClick = useCallback((regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <MenuTypesList
      types={regions}
      onClickType={handleClick}
      selectedType={selectedRegion}
    />
  );
}
