import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

const Categories = styled.ul({
  display: 'flex',
  margin: '20px 0',
  '& li': {
    marginRight: '5px',
    '& button': {
      appearance: 'none',
      background: '#28a745',
      color: '#fff',
      margin: 0,
      padding: '8px 16px',
      fontFamily: '\'Dancing Script\', cursive, \'Nanum Brush Script\', cursive',
      fontSize: '16px',
      textAlign: 'center',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      cursor: 'pointer',
      transition: '0.5s',
      ':active, :hover, :focus': {
        background: '#218838',
        outline: 0,
      },
    },
  },
});

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = useCallback((categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }, [dispatch]);

  return (
    <Categories>
      {categories.map((category) => (
        <li key={category.id}>
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
        </li>
      ))}
    </Categories>
  );
}
