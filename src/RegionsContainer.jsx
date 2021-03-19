import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Container from './styles/Container';
import List from './styles/List';
import Item from './styles/Item';
import SelectButton from './styles/SelectButton';

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

  const isSelected = (item) => (item.id === selectedRegion.id);

  return (
    <Container>
      <List>
        {regions.map((region) => (
          <Item key={region.id}>
            <SelectButton
              type="button"
              active={selectedRegion && isSelected(region)}
              onClick={() => handleClick(region.id)}
            >
              {region.name}
              {selectedRegion ? (
                <>
                  {selectedRegion && isSelected(region) ? '(V)' : null}
                </>
              ) : null}
            </SelectButton>
          </Item>
        ))}
      </List>
    </Container>
  );
}
