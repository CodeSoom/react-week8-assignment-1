import React from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import { colors } from './designSystem';

const Container = styled.div({
  padding: '2em 3em',
  margin: 0,
});

const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
});

const Item = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    fontSize: '1em',
    margin: '1em 0',
    padding: '.6em 2em',
    border: '1px solid',
    borderColor: active ? 'transparent' : colors.highlight,
    borderRadius: '15px',
    background: active ? colors.highlight : 'transparent',
    color: active ? colors.white : colors.black,
    textDecoration: 'none',
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

  const isSelected = (item) => (item.id === selectedRegion.id);

  return (
    <Container>
      <List>
        {regions.map((region) => (
          <Item
            key={region.id}
            active={selectedRegion && isSelected(region)}
          >
            <button
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {region.name}
              {selectedRegion ? (
                <>
                  {selectedRegion && isSelected(region) ? '(V)' : null}
                </>
              ) : null}
            </button>
          </Item>
        ))}
      </List>
    </Container>
  );
}
