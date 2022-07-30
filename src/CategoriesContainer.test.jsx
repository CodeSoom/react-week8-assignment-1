import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import CATEGORIES from '../fixtures/categories';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    categories: {
      categories: given.categories,
      selectedCategory: { id: 1, name: '한식' },
    },
  }));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  const renderCategoriesContainer = () => render((
    <CategoriesContainer />
  ));

  context('with categories', () => {
    given('categories', () => CATEGORIES);

    it('renders checked categories and checked symbol', () => {
      const { container, getByText } = renderCategoriesContainer();

      expect(container).toHaveTextContent('한식(V)');
      expect(container).toHaveTextContent('양식');

      fireEvent.click(getByText('양식'));

      expect(dispatch).toBeCalled();
    });
  });

  context('without categories', () => {
    it('renders "카테고리 목록을 조회하지 못했습니다." message', () => {
      given('categories', () => []);

      const { container } = renderCategoriesContainer();

      expect(container).toHaveTextContent('카테고리 목록을 조회하지 못했습니다.');
    });
  });
});
