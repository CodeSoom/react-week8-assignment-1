import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import CriteriaItem from './styles/CriteriaItem';
import CriteriaList from './styles/CriteriaList';
import CriteriaTitle from './styles/CriteriaTitle';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <>
      <CriteriaTitle>
        분류
      </CriteriaTitle>
      <CriteriaList>
        {categories.map((category) => (
          <li key={category.id}>
            <CriteriaItem
              type="button"
              onClick={() => handleClick(category.id)}
              active={selectedCategory && category.id === selectedCategory.id}
            >
              {category.name}
            </CriteriaItem>
          </li>
        ))}
      </CriteriaList>
    </>
  );
}
