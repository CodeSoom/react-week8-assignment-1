import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '../../lib/reducers/slice';

import { get } from '../../lib/utils';

import MenuTypesList from '../../components/menu/MenuTypesList';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = useCallback((categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <MenuTypesList
      types={categories}
      onClickType={handleClick}
      selectedType={selectedCategory}
    />
  );
}
