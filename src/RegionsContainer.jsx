import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

const Regions = styled.ul({
  display: 'flex',
  margin: '20px 0',
  li: {
    marginRight: '5px',
    button: {
      appearance: 'none',
      background: '#28a745',
      color: '#fff',
      margin: 0,
      padding: '8px 16px',
      fontFamily: '\'Dancing Script\', cursive, \'Nanum Brush Script\', cursive',
      fontSize: '16px',
      textAlign: 'center',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      cursor: 'pointer',
      transition: '0.5s',
      '&:active, &:hover, &:focus': {
        background: '#218838',
        outline: 0,
      },
    },
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
        </li>
      ))}
    </Regions>
  );
}
