import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '../slice';

import { get } from '../shared/utils';
import Button from '../shared/components/Button';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Button
            active={category.id === selectedCategory?.id}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
