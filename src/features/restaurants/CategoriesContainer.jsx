import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
  getCategories,
  getSelectedCategory,
} from './restaurantsSlice';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(getCategories);
  const selectedCategory = useSelector(getSelectedCategory);

  function handleClick(categoryId) {
    dispatch(selectCategory({ categoryId }));
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
