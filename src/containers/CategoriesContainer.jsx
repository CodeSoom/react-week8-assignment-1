import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SubContainer from '../styles/SubContainer';
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

  const handleClick = useCallback((categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <SubContainer>
      <h3>카테고리</h3>
      <MenuList>
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            active={selectedCategory && selectedCategory.id === category.id}
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
    </SubContainer>
  );
}
