import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  const handleClick = useCallback((regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <ButtonGroup>
      {regions.map((region) => (
        <li key={region.id}>
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
        </li>
      ))}
    </ButtonGroup>
  );
}
