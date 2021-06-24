import { useDispatch, useSelector } from 'react-redux';

import MenuList from './style/MenuList';
import MenuItem from './style/MenuItem';

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

  return (
    <MenuList>
      {regions.map(({ id, name }) => (
        <MenuItem
          key={id}
          active={selectedRegion?.id === id}
        >
          <button
            type="button"
            onClick={() => handleClick(id)}
          >
            {name}
            {selectedRegion ? (
              <>
                {id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
