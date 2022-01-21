import { useDispatch, useSelector } from 'react-redux';

import { selectRegion, loadRestaurants } from './slice';

import { get } from './utils';

import { MenuList, MenuItem } from './styles/Menu';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  const handleClick = (regionId) => {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  };

  return (
    <MenuList>
      {regions.map((region) => (
        <MenuItem
          key={region.id}
          select={selectedRegion && region.id === selectedRegion.id}
        >
          <button type="button" onClick={() => handleClick(region.id)}>
            {region.name}
            {selectedRegion ? (
              <>{region.id === selectedRegion.id ? '(V)' : null}</>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
