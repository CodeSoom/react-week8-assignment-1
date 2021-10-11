import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

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
    <Ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Button
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
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
`;

const Button = styled.button`
  padding: 0.5em 1.5em;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    color: #FFF;
    background-color: #000;
  }
`;
