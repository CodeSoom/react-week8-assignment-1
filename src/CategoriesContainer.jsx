import { useDispatch, useSelector } from 'react-redux';

import { selectCategory, loadRestaurants } from './slice';

import { get } from './utils';

import { MenuList, MenuItem } from './styles/Menu';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = (categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  };

  return (
    <MenuList>
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          select={selectedCategory && selectedCategory.id === category.id}
        >
          <button type="button" onClick={() => handleClick(category.id)}>
            {category.name}
            {selectedCategory ? (
              <>{category.id === selectedCategory.id ? '(V)' : null}</>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
