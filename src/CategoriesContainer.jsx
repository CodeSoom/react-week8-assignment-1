import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import ListItem from './ListItem';
import ListWrap from './ListWrap';

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
    <ListWrap>
      <h2>카테고리를 선택하세요</h2>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} active={selectedCategory && category.id === selectedCategory.id}>
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
    </ListWrap>
  );
}
