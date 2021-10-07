import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

const List = styled.ul({
  margin: '0',
  padding: '0',
  display: 'flex',
  listStyle: 'none',
});

const Item = styled.li(({ active }) => ({
  marginRight: '5px',
  padding: '10px',
  '& button': {
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
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
