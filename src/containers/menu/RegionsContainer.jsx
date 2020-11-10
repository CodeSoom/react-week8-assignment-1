import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';

import MenuTypesList from '../../components/menu/MenuTypesList';

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
