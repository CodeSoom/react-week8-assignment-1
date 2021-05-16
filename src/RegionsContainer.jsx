import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';


const Button = styled.button({
  width: '30%',
  height: '2.5rem',
  borderRadius: '1.2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  border: '0.2rem solid #f48c06',
  '&:hover': {
    backgroundColor: 'lightpink',
  },
  marginBottom: '0.5rem',
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
    <ul>
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
    </ul>
  );
}
