import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';

import RestaurantButton from '../../styles/RestaurantButton';

const RegionsList = styled.ul`
  display:flex;
  flex-wrap: wrap;
`;

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <RegionsList>
      {regions.map((region) => (
        <li key={region.id}>
          <RestaurantButton
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </RestaurantButton>
        </li>
      ))}
    </RegionsList>
  );
}
