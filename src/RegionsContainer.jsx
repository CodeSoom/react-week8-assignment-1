import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

const List = styled.ul({
  margin: '0',
  padding: '0',
  display: 'flex',
  listStyle: 'none',
});

const Item = styled.li(({ active }) => ({
  marginRight: '5px',
  padding: '10px',
  '& button': {
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    background: active ? '#2ecc71' : '#EEE',
    color: active ? '#EEE' : 'black',
    outline: 'none',
    cursor: 'pointer',
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
    <List>
      {regions.map((region) => (
        <Item
          key={region.id}
          active={selectedRegion && region.id === selectedRegion.id ? '(V)' : null}
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
        </Item>
      ))}
    </List>
  );
}
