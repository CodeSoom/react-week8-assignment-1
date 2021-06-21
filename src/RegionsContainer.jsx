import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from './redux_modules/asyncActions';
import { selectRegion } from './redux_modules/restaurantSlice';

import MenuList from './MenuList';
import MenuItem from './MenuItem';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.restaurant.regions);
  const selectedRegion = useSelector((state) => state.restaurant.selectedRegion);

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <MenuList>
      {regions.map((region) => {
        const isSelected = selectedRegion && (region.id === selectedRegion.id);

        return (
          <MenuItem
            key={region.id}
            isSelected={isSelected}
          >
            <button
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {region.name}
              {selectedRegion ? (
                <>
                  {isSelected ? '(V)' : null}
                </>
              ) : null}
            </button>
          </MenuItem>
        );
      })}
    </MenuList>
  );
}
