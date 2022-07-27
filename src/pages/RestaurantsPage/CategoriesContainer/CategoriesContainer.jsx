import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  selectCategories,
  selectSelectedCategory,
} from '@/store/categoriesSlice';
import { loadRestaurants } from '@/store/restaurantsSlice';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
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
