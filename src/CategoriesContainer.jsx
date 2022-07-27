import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

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

  return (
    <StyledCategories>
      {categories.map((category) => (
        <StyledCategory
          active={selectedCategory && selectedCategory.id === category.id}
          key={category.id}
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
        </StyledCategory>
      ))}
    </StyledCategories>
  );
}

const StyledCategories = styled.ul({
  display: 'flex',
  justifyContent: 'space-around',

  margin: '0',
  padding: '.4em 0',

  listStyle: 'none',
});

const StyledCategory = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '1em',
    borderRadius: '10px',
    border: '0',

    background: active ? 'pink' : 'transparent',
    color: active ? 'white' : 'skyblue',

    textDecoration: 'none',

    cursor: 'pointer',
    '&:hover': {
      color: active ? 'white' : 'pink',
    },
  },
}));
