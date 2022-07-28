import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  selectRegions,
  selectSelectedRegion,
} from '@/store/regionsSlice';
import { loadRestaurants } from '@/store/restaurantsSlice';

import MenuList from '@/components/MenuList';
import MenuItem from '@/components/MenuItem';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(selectRegions);
  const selectedRegion = useSelector(selectSelectedRegion);

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <MenuList>
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
            {selectedRegion
             && region.id === selectedRegion.id
             && '(V)'}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
