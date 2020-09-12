import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  const renderCategories = (selectedCategory) => render((
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      handleClick={handleClick}
    />
  ));

  it('renders `category` title and buttons', () => {
    const { getByText } = renderCategories(categories[0]);

    expect(getByText('Category')).not.toBeNull();

    categories.forEach((category) => {
      if (category.id === categories[0].id) {
        expect(getByText(`${category.name}(V)`)).not.toBeNull();
      }
      if (category.id !== categories[0].id) {
        expect(getByText(`${category.name}`)).not.toBeNull();
      }
    });
  });

  context('when the button is clicked', () => {
    it('runs handleClick', () => {
      const { getByText } = renderCategories(categories[0]);

      fireEvent.click(getByText(categories[1].name));

      expect(handleClick).toBeCalled();
    });
  });

  context('when selected category is not defined', () => {
    it('does not render `(V)` signs', () => {
      const { queryByText } = renderCategories(undefined);

      expect(queryByText('(V)')).toBeNull();
    });
  });
});
