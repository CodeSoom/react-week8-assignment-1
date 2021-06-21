import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from './redux_modules/restaurantSlice';
import { loadRestaurants } from './redux_modules/asyncActions';

import MenuList from './MenuList';
import MenuItem from './MenuItem';

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
      {categories.map((category) => (
        <MenuItem key={category.id}>
          <button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
