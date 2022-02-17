import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from './store/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector(({ restaurant }) => restaurant);

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <ButtonGroup>
      {categories.map((category) => (
        <Button
          key={category.id}
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
      ))}
    </ButtonGroup>
  );
}
