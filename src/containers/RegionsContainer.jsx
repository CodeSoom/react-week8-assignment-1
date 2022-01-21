import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../slice';

import MenuList from '../components/MenuList.style';
import MenuItem from '../components/MenuItem.style';

import { get } from '../utils';

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
      <h2>Regions</h2>
      <MenuList>
        {regions.map((region) => (
          <MenuItem key={region.id}>
            <button
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {region.name}
              {selectedRegion ? (
                <>
                  {region.id === selectedRegion.id ? '(V)' : null}
                </>
              ) : null}
            </button>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
}
