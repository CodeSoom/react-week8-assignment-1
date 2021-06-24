import { useDispatch, useSelector } from 'react-redux';

import MenuList from './style/MenuList';
import MenuItem from './style/MenuItem';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <MenuList>
      {categories.map(({ id, name }) => (
        <MenuItem
          key={id}
          active={selectedCategory?.id === id}
        >
          <button
            type="button"
            onClick={() => handleClick(id)}
          >
            {name}
            {selectedCategory ? (
              <>
                {id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
