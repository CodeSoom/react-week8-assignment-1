import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import MenuContainer from '../styles/MenuContainer';

import {
  selectCategory,
  loadRestaurants,
} from './restaurantsSlice';

import { get } from '../utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get({
    page: 'restaurants',
    key: 'categories',
  }));

  const selectedCategory = useSelector(get({
    page: 'restaurants',
    key: 'selectedCategory',
  }));

  const handleClick = useCallback((categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <MenuContainer>
      <h3>음식종류</h3>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={handleClick}
      />
    </MenuContainer>
  );
}
