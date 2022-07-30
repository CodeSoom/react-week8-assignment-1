import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectedCategorySelector,
  categoriesSelector,
  selectCategory,
  loadCategories,
} from './features/categories/categoriesSlice';

import { loadRestaurants } from './features/restaurants/restaurantsSlice';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const categories = useSelector(categoriesSelector);
  const selectedCategory = useSelector(selectedCategorySelector);

  function handleClick(categoryId) {
    dispatch(selectCategory({ categoryId }));
    dispatch(loadRestaurants());
  }

  if (!categories?.length) {
    return (
      <p>
        카테고리 목록을 조회하지 못했습니다.
      </p>
    );
  }

  return (
    <ul>
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
    </ul>
  );
}
