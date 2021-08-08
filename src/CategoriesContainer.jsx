import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';
import Button from './Button';

const Categories = styled.ul({
  display: 'flex',
  margin: '20px 0',
  '& li': {
    marginRight: '5px',
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
          <Button
            background="#28a745"
            hoverBackground="#218838"
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
        </li>
      ))}
    </Categories>
  );
}
