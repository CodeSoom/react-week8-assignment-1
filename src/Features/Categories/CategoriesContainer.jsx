import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectCategory,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';

import RestaurantButton from '../../styles/RestaurantButton';

const CategoriesList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  & button{
    background-color:#FF5F00;
    color: #fff;
  }
`;

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <CategoriesList>
      {categories.map((category) => (
        <li key={category.id}>
          <RestaurantButton
            type="button"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </RestaurantButton>
        </li>
      ))}
    </CategoriesList>
  );
}
