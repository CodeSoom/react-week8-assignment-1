import { useDispatch, useSelector } from 'react-redux';

import { useCallback } from 'react';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import Menu from './Menu';
import MenuItem from './MenuItem';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = (categoryId) => useCallback(() => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <Menu>
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          active={selectedCategory && category.id === selectedCategory.id}
        >
          <button
            type="button"
            onClick={handleClick(category.id)}
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
    </Menu>
  );
}
