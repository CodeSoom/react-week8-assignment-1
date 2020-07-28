import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import OptionContainer from '../OptionContainer';
import Button from '../Button';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils/utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <OptionContainer>
      {regions.map((region) => (
        <Button
          key={region.id}
          active={selectedRegion && region.id === selectedRegion.id}
          type="button"
          onClick={() => handleClick(region.id)}
        >
          {region.name}
          {selectedRegion ? (
            <>
              {region.id === selectedRegion.id ? '(V)' : null}
            </>
          ) : null}
        </Button>
      ))}
    </OptionContainer>
  );
}
