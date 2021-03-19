import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Container from './styles/Container';
import List from './styles/List';
import Item from './styles/Item';
import SelectButton from './styles/SelectButton';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  const isSelected = (item) => (item.id === selectedCategory.id);

  return (
    <Container>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <SelectButton
              type="button"
              active={selectedCategory && isSelected(category)}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
              {selectedCategory ? (
                <>
                  {isSelected(category) ? '(V)' : null}
                </>
              ) : null}
            </SelectButton>
          </Item>
        ))}
      </List>
    </Container>
  );
}
