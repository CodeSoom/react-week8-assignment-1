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
    <MenuList>
      {regions.map((region) => (
        <MenuItem active={selectedRegion && region.id === selectedRegion.id} key={region.id}>
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
        </MenuItem>
      ))}
    </MenuList>
  );
}

const MenuList = styled.ul({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '0',
  padding: '.4em 0',
  listStyle: 'none',
});

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    borderRadius: '10px',
    padding: '1em',
    cursor: 'pointer',
    border: '0',
    background: active ? 'pink' : 'transparent',
    color: active ? 'white' : 'skyblue',
    textDecoration: 'none',

    '&:hover': {
      color: active ? 'white' : 'pink',
    },
  },
}));
