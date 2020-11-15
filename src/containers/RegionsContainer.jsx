import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../redux/slice';

import { get } from '../utils';
import { List, Button } from '../layouts/Restaurants';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  const handleClick = useCallback((regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <ul>
      {regions.map((region) => (
        <List key={region.id}>
          <Button
            type="button"
            onClick={() => handleClick(region.id)}
            active={selectedRegion ? region.name === selectedRegion.name : false}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </Button>
        </List>
      ))}
    </ul>
  );
}
