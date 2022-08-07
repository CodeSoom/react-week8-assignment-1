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

  const { data: regions, status, error } = useSelector(selectRegions);
  const selectedRegion = useSelector(selectSelectedRegion);

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  if (status === 'loading') {
    return <p>지역 목록 불러오는 중</p>;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
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
