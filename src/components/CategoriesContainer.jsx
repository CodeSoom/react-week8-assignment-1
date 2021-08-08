import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from '../redux_modules/restaurantSlice';
import { loadRestaurants } from '../redux_modules/asyncActions';

import MenuList from './MenuList';
import MenuItem from './MenuItem';
import SelectButton from './SelectButton';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.restaurant.categories);
  const selectedCategory = useSelector((state) => state.restaurant.selectedCategory);

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <MenuList>
      {categories.map(({ id, name }) => {
        const isSelected = (id === selectedCategory?.id);

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
