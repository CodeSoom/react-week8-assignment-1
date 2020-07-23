import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ItemList from './ItemList';
import Item from './Item';
import StyledListButton from './StyledListButton';

import {
  selectCategory,
  loadRestaurants,
} from './reducer';

import { get } from './utils';


export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <ItemList>
      {categories.map((category) => (
        <Item key={category.id}>
          <StyledListButton
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </StyledListButton>
        </Item>
      ))}
    </ItemList>
  );
}
