import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import MenuItems from './styles/MenuItems';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
  position: 'fixed',
  top: '100px',
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
        <li key={region.id}>
          <MenuItems
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </MenuItems>
        </li>
      ))}
    </List>
  );
}
