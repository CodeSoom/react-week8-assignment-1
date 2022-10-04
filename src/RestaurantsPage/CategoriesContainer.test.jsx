import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: {
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '양식' },
        ],
        selectedCategory: { id: 1, name: '한식' },
      },
    }));
  });

  it('renders caegories', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('한식').parentElement.firstChild).toHaveStyle('border: 2px solid #555');
    expect(getByText('한식').parentElement).toHaveStyle('color: #000');
    expect(getByText('양식').parentElement.firstChild).toHaveStyle('border: 2px solid #cbcbcb');
    expect(getByText('양식').parentElement).toHaveStyle('color: #555');

    fireEvent.click(getByText('양식'));

    expect(dispatch).toBeCalled();
  });
});
