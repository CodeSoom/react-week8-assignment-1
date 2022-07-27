import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

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
    <StyledRegions>
      {regions.map((region) => (
        <StyledRegion active={selectedRegion && region.id === selectedRegion.id} key={region.id}>
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
        </StyledRegion>
      ))}
    </StyledRegions>
  );
}

const StyledRegions = styled.ul({
  display: 'flex',
  justifyContent: 'space-around',

  margin: '0',
  padding: '.4em 0',

  listStyle: 'none',
});

const StyledRegion = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '1em',
    border: '0',
    borderRadius: '10px',

    background: active ? 'pink' : 'transparent',
    color: active ? 'white' : 'skyblue',

    textDecoration: 'none',

    cursor: 'pointer',
    '&:hover': {
      color: active ? 'white' : 'pink',
    },
  },
}));
