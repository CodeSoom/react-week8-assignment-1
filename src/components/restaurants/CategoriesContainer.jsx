import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import OptionList from '../OptionList';
import OptionItem from '../OptionItem';
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
    <OptionList>
      {categories.map((category) => (
        <OptionItem
          key={category.id}
          active={selectedCategory && category.id === selectedCategory.id}
        >
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
        </OptionItem>
      ))}
    </OptionList>
  );
}
