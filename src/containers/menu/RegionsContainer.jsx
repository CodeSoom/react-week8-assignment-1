import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MenuList from '../../MenuList';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';
import Menu from '../../components/menu/Menu';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  const handleClick = useCallback((regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <MenuList>
      {regions.map(({ id, name }) => (
        <Menu
          key={id}
          name={name}
          check={selectedRegion && id === selectedRegion.id}
          onClick={() => handleClick(id)}
        />
      ))}
    </MenuList>
  );
}
