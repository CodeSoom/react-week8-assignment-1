import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import OptionList from '../OptionList';
import OptionItem from '../OptionItem';
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
    <OptionList>
      {regions.map((region) => (
        <OptionItem
          key={region.id}
          active={selectedRegion && region.id === selectedRegion.id}
        >
          <Button
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
        </OptionItem>
      ))}
    </OptionList>
  );
}
