import { useDispatch, useSelector } from 'react-redux';

import Menu from '../styles/Menu';
import MenuItem from '../styles/MenuItem';

import {
  selectCategory,
  loadRestaurants,
} from '../slice';

import { get } from '../utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Menu>
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
