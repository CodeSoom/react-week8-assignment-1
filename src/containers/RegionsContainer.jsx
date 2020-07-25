import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../store/actions';

import { get } from '../utils';

import MenuList from '../components/MenuList';
import MenuItem from '../components/MenuItem';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <MenuList>
      {regions.map((region) => (
        <MenuItem key={region.id} active={selectedRegion && region.id === selectedRegion.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
