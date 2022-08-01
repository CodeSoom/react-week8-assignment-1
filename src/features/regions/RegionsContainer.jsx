import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  regionsSelector,
  selectedRegionSelector,
  selectRegion,
  loadRegions,
} from './regionsSlice';

import { loadRestaurants } from '../restaurants/restaurantsSlice';

const Title = styled.h3({
  margin: '0 0 1rem 0',
  fontSize: '2rem',
});

const List = styled.ul({
  display: 'flex',
});

const Item = styled.li({
  marginRight: '1.5rem',

  '&:last-child': {
    marginRight: 0,
  },
});

const MenuButton = styled.button(({ selected }) => ({
  padding: '1rem 1.5rem',
  border: '2px solid #495057',
  borderRadius: '0.5rem',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: selected ? '#ffffff' : '#495057',
  backgroundColor: selected ? '#495057' : '#ffffff',
}));

export default function RegionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  const regions = useSelector(regionsSelector);
  const selectedRegion = useSelector(selectedRegionSelector);

  const handleClick = (regionId) => {
    dispatch(selectRegion({ regionId }));
    dispatch(loadRestaurants());
  };

  const isSelected = (regionId) => {
    if (!selectedRegion) {
      return false;
    }

    return selectedRegion.id === regionId;
  };

  if (!regions?.length) {
    return (
      <p>
        지역 목록을 조회하지 못했습니다.
      </p>
    );
  }

  return (
    <>
      <Title>지역 목록</Title>
      <List>
        {regions.map((region) => (
          <Item key={region.id}>
            <MenuButton
              selected={isSelected(region.id)}
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {region.name}
              {selectedRegion ? (
                <>
                  {isSelected(region.id) ? '(V)' : null}
                </>
              ) : null}
            </MenuButton>
          </Item>
        ))}
      </List>
    </>
  );
}
