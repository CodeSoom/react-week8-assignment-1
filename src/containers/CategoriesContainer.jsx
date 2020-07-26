import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '../common/slice';

import { get } from '../common/utils';

import Selects from '../presentationals/common/Selects';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Selects
      selectTitle="Category"
      selectMenus={categories}
      handleClick={handleClick}
      selectedItem={selectedCategory}
      defaultColor="#fff"
      activeColor="#8d98f2"
    />
  );
}
