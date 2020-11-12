import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import Button from './style/Button';
import Row from './style/Row';

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
      <p style={{ color: '#696969' }}>분류</p>
      <Row>
        {categories.map((category) => (
          <li key={category.id}>
            <Button
              type="button"
              onClick={() => handleClick(category.id)}
              active={selectedCategory && category.id === selectedCategory.id}
            >
              {category.name}
            </Button>
          </li>
        ))}
      </Row>
    </>
  );
}
