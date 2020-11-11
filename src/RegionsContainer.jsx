import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

const Row = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: '1rem 1rem',
  overflowY: 'hidden',
  '&::-webkit-scrollbar': {
    width: 0,
  },
});

const Button = styled.button({
  margin: '0 .5rem',
  padding: '.5rem 1rem',
  width: '7rem',
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
    <>
      <h3>지역</h3>
      <Row>
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
      </Row>
    </>
  );
}
