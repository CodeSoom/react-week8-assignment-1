import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import MenuList from './MenuList';
import MenuItem from './MenuItem';
import Button from './Button';

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
      {categories.map((category) => (
        <MenuItem key={category.id}>
          <Button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </Button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
