import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from './redux_modules/restaurantSlice';
import { loadRestaurants } from './redux_modules/asyncActions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.restaurant.categories);
  const selectedCategory = useSelector((state) => state.restaurant.selectedCategory);

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
