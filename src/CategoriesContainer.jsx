import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MenuList from './MenuList';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';
import Item from './Item';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = useCallback((categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <MenuList>
      {categories.map(({ id, name }) => (
        <Item
          key={id}
          name={name}
          check={selectedCategory && id === selectedCategory.id}
          onClick={() => handleClick(id)}
        />
      ))}
    </MenuList>
  );
}
