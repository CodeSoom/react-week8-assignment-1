import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Container from '../styles/Container';
import MenuList from '../styles/MenuList';
import MenuItem from '../styles/MenuItem';

import {
  selectCategory,
  loadRestaurants,
} from '../modules/slice';

import { get } from '../modules/utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Container>
      <h3>카테고리</h3>
      <MenuList>
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            active={selectedCategory && category.id === selectedCategory.id}
          >
            <button
              type="button"
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </button>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
}
