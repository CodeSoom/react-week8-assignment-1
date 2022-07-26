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
    <MenuList>
      {categories.map((category) => (
        <MenuItem
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
        </MenuItem>
      ))}
    </MenuList>
  );
}

const MenuList = styled.ul({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '0',
  padding: '.4em 0',
  listStyle: 'none',
});

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    borderRadius: '10px',
    padding: '1em',
    cursor: 'pointer',
    border: '0',
    background: active ? 'pink' : 'transparent',
    color: active ? 'white' : 'skyblue',
    textDecoration: 'none',

    '&:hover': {
      color: active ? 'white' : 'pink',
    },
  },
}));
