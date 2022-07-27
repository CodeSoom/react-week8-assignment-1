import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from '../slice';

import { get } from '../utils';

const Menu = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    marginBottom: '1em',
    padding: '.4em 1em',
    border: '1px solid #CCCCCC',
    color: '#333333',
    background: active ? '#EEEEEE' : 'transparent',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
  },
}));

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Menu>
      {regions.map((region) => (
        <MenuItem
          key={region.id}
          active={selectedRegion && region.id === selectedRegion.id}
        >
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
    </Menu>
  );
}
