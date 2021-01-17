import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

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
    <>
      <h4>카테고리</h4>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={handleClick}
      />
    </>
  );
}
