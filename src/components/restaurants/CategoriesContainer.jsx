import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import OptionContainer from '../OptionContainer';
import Button from '../Button';

import {
  selectCategory,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils/utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <OptionContainer>
      {categories.map((category) => (
        <Button
          key={category.id}
          active={selectedCategory && category.id === selectedCategory.id}
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
      ))}
    </OptionContainer>
  );
}
