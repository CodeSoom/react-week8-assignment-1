import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './slice';

import { get } from './utils';

import MenuItems from './styles/MenuItems';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  top: '200px',
});

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
        <li key={category.id}>
          <MenuItems
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </MenuItems>
        </li>
      ))}
    </List>
  );
}
