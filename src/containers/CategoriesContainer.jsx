import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '../slice';
import { get } from '../utils';
import { List, ListItem } from './CategoriesContainer.style';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = useCallback((categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.id}>
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
        </ListItem>
      ))}
    </List>
  );
}
