import { useDispatch, useSelector } from 'react-redux';

import ListBox from './style/ListBox';
import List from './style/List';
import Item from './style/Item';

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
    <ListBox>
      <h4>카테고리 선택</h4>
      <List>
        {categories.map(({ id, name }) => (
          <Item
            key={id}
            active={selectedCategory?.id === id}
          >
            <button
              type="button"
              onClick={() => handleClick(id)}
            >
              {name}
              {selectedCategory ? (
                <>
                  {id === selectedCategory.id ? '(V)' : null}
                </>
              ) : null}
            </button>
          </Item>
        ))}
      </List>
    </ListBox>
  );
}
