import React from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import { colors } from './designSystem';

const Container = styled.div({
  padding: '2em 3em',
  margin: 0,
});

const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
});

const Item = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    fontSize: '1em',
    margin: '1em 0',
    padding: '.6em 2em',
    border: '1px solid',
    borderColor: active ? 'transparent' : colors.highlight,
    borderRadius: '15px',
    background: active ? colors.highlight : 'transparent',
    color: active ? colors.white : colors.black,
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

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
          <Item
            key={category.id}
            active={selectedCategory && isSelected(category)}
          >
            <button
              type="button"
              onClick={() => handleClick(category.id)}
            >
              {category.name}
              {selectedCategory ? (
                <>
                  {isSelected(category) ? '(V)' : null}
                </>
              ) : null}
            </button>
          </Item>
        ))}
      </List>
    </Container>
  );
}
