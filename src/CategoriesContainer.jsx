import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const Item = styled.li(({ active }) => ({
  marginRight: '.3em',
  padding: '.6em',
  '& button': {
    border: 'none',
    borderRadius: '.3em',
    padding: '.3em .6em',
    background: active ? '#2ecc71' : '#EEE',
    color: active ? '#EEE' : 'black',
    outline: 'none',
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

  return (
    <List>
      {categories.map((category) => (
        <Item
          key={category.id}
          active={selectedCategory && category.id === selectedCategory.id ? '(V)' : null}
        >
          <button
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </Item>
      ))}
    </List>
  );
}
