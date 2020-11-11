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
      <h3>메뉴</h3>
      <Row>
        {categories.map((category) => (
          <li key={category.id}>
            <Button
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
      </Row>
    </>
  );
}
