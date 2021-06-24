import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';
import Button from './Button';

const Regions = styled.ul({
  display: 'flex',
  margin: '20px 0',
  '& li': {
    marginRight: '5px',
  },
});

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Regions>
      {regions.map((region) => (
        <li key={region.id}>
          <Button
            background="#28a745"
            hoverBackground="#218838"
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
    </Regions>
  );
}
