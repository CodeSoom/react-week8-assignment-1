import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectCategory,
  loadRestaurants,
} from '../slice';

import { get } from '../utils';

const Menu = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    marginBottom: '1em',
    padding: '.4em 1em',
    border: '1px solid #CCCCCC',
    color: '#333333',
    background: active ? '#EEEEEE' : 'transparent',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
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
    <Menu>
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          active={selectedCategory && category.id === selectedCategory.id}
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
        </MenuItem>
      ))}
    </Menu>
  );
}
