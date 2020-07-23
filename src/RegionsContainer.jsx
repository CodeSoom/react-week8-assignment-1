import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './reducer';

import { get } from './utils';

import ItemList from './ItemList';
import Item from './Item';
import StyledListButton from './StyledListButton';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ItemList>
      {regions.map((region) => (
        <Item key={region.id}>
          <StyledListButton
            type="button"
            onClick={() => handleClick(region.id)}
            bgColor="red"
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </StyledListButton>
        </Item>
      ))}
    </ItemList>
  );
}
