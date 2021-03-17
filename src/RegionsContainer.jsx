import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './actions';

import { get } from './utils';

import styled from '@emotion/styled';

const List = styled.ul({
  display:'flex',
  margin: 0,
  padding: '.4em 0',
  listStyle: 'none',  
});

const Item = styled.li({
  marginRight: '1em',
  '& button': {
    border: 0,
    color: '#333',
    background: 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
    fontWeight: 'bold',
    color: '#000',
    }
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
    <List>
      {regions.map((region) => (
        <Item key={region.id}>
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
