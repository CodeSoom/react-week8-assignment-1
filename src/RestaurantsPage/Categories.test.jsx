import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  function renderCategories(selectedCategory) {
    return render((
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={handleClick}
      />
    ));
  }

  it('renders categories', () => {
    const { getAllByRole } = renderCategories();

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });

    expect(getAllByRole('listitem')).toHaveLength(categories.length);
  });

  it('renders button to listent to click event', () => {
    const { getAllByRole } = renderCategories();

    const categoriesButtons = getAllByRole('button');

    expect(handleClick).not.toBeCalled();

    categories.forEach((category, index) => {
      fireEvent.click(categoriesButtons[index]);

      expect(handleClick).toBeCalledWith(category.id);
    });
  });

  context('with selected category', () => {
    categories.forEach((category, index) => {
      it("renders 'V' button with equal category id", () => {
        const { getAllByRole } = renderCategories(category);

        expect(getAllByRole('button')[index].textContent).toContain('V');
      });
    });
  });

  context('without selectedcategory', () => {
    it('doesn\'t render \'V\' button', () => {
      const { getAllByRole } = renderCategories();

      const categoriesButtons = getAllByRole('button');

      categoriesButtons.forEach((button) => {
        expect(button).not.toContain('V');
      });
    });
  });
});
