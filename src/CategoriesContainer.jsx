import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';
import { Button, ListWrapper } from './style';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = useCallback((categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <ListWrapper>
      {categories.map((category) => (
        <li key={category.id}>
          <Button
            color="secondary"
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
        </li>
      ))}
    </ListWrapper>
  );
}
