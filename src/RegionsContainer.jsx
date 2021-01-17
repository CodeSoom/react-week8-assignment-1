import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import CriteriaItem from './styles/CriteriaItem';
import CriteriaList from './styles/CriteriaList';
import CriteriaTitle from './styles/CriteriaTitle';

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
      <CriteriaTitle>
        지역
      </CriteriaTitle>
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
