import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../redux_modules/asyncActions';
import { selectRegion } from '../redux_modules/restaurantSlice';

import MenuList from './MenuList';
import MenuItem from './MenuItem';
import SelectButton from './SelectButton';

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
      {regions.map(({ id, name }) => {
        const isSelected = (id === selectedRegion?.id);

        return (
          <MenuItem
            key={id}
            isSelected={isSelected}
          >
            <SelectButton
              onClick={() => handleClick(id)}
              name={name}
              isSelected={isSelected}
            />
          </MenuItem>
        );
      })}
    </MenuList>
  );
}
