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
      it('renders changed style button', () => {
        const { getAllByRole } = renderCategories(category);

        expect(getAllByRole('button')[index].firstChild).toHaveStyle('border: 2px solid #555');
        expect(getAllByRole('button')[index]).toHaveStyle('color: #000');
      });
    });
  });

  context('without selectedcategory', () => {
    it('renders default style button', () => {
      const { getAllByRole } = renderCategories();

      const categoriesButtons = getAllByRole('button');

      categoriesButtons.forEach((button) => {
        expect(button.firstChild).toHaveStyle('border: 2px solid #cbcbcb');
        expect(button).toHaveStyle('color: #555');
      });
    });
  });
});
