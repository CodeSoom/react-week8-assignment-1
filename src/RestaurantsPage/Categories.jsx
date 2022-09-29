import { memo } from 'react';

const Categories = memo(({ categories, selectedCategory, onClick }) => {
  function handleClick(categoryId) {
    return () => onClick(categoryId);
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
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
        </li>
      ))}
    </ul>
  );
});

export default Categories;
