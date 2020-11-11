import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import Button from './style/Button';
import Row from './style/Row';

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
      <Row>
        {regions.map((region) => (
          <li key={region.id}>
            <Button
              type="button"
              onClick={() => handleClick(region.id)}
              isSelected={selectedRegion && region.id === selectedRegion.id}
            >
              {region.name}
            </Button>
          </li>
        ))}
      </Row>
    </>
  );
}
