import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import CATEGORIES from '../fixtures/categories';

describe('Categories', () => {
  it('renders regions and checked symbol', () => {
    const handleClick = jest.fn();

    const { container, getByText } = render((
      <Categories
        categories={CATEGORIES}
        selectedCategory={CATEGORIES[0]}
        onClick={handleClick}
      />
    ));

    expect(container).toHaveTextContent('한식(V)');
    expect(container).toHaveTextContent('양식');

    fireEvent.click(getByText('양식'));

    expect(handleClick).toBeCalledWith(CATEGORIES[1].id);
  });
});
