import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import CriteriaItem from './styles/CriteriaItem';
import CriteriaList from './styles/CriteriaList';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <>
      <p style={{ color: '#696969' }}>지역</p>
      <CriteriaList>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <CriteriaItem
              type="button"
              onClick={() => handleClick(id)}
              active={selectedRegion && id === selectedRegion.id}
            >
              {name}
            </CriteriaItem>
          </li>
        ))}
      </CriteriaList>
    </>
  );
}
