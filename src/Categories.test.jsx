import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  it('renders regions', () => {
    const { container, getByText } = render((
      <Categories
        categories={categories}
        selectedCategory={categories[0]}
        onClick={handleClick}
      />
    ));

    expect(container).toHaveTextContent('한식(V)');
    expect(container).toHaveTextContent('양식');

    fireEvent.click(getByText('양식'));

    expect(handleClick).toBeCalled();
  });
});
