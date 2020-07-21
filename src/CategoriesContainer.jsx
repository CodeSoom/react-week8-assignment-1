import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './actions';

import { get } from './utils';

import List from './List';
import { MenuItem } from './ListItem';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <List>
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
    </List>
  );
}
