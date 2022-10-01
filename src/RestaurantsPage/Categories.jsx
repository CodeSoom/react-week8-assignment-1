import { memo } from 'react';

import MenuList from '../styles/MenuList';
import MenuItem from '../styles/MenuItem';

export default memo(({ categories, selectedCategory, onClick }) => {
  function handleClick(categoryId) {
    return () => onClick(categoryId);
  }

  return (
    <MenuList>
      {categories.map((category) => (
        <MenuItem key={category.id}>
          <button
            type="button"
            onClick={handleClick(category.id)}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
});
