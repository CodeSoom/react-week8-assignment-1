import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import ListWrap from './ListWrap';
import List from './List';
import ListItem from './ListItem';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ListWrap>
      <h2>지역을 선택하세요</h2>
      <List>
        {regions.map((region) => (
          <ListItem key={region.id} active={selectedRegion && region.id === selectedRegion.id}>
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
          </ListItem>
        ))}
      </List>
    </ListWrap>
  );
}
