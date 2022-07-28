import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  selectCategories,
  selectSelectedCategory,
} from '@/store/categoriesSlice';
import { loadRestaurants } from '@/store/restaurantsSlice';

import MenuList from '@/components/MenuList';
import MenuItem from '@/components/MenuItem';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <MenuList>
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          active={selectedCategory && category.id === selectedCategory.id}
        >
          <button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory
             && category.id === selectedCategory.id
             && '(V)'}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
