import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
      selectedRegion: { id: 1, name: '서울' },
      selectedCategory: { id: 1, name: '한식' },
    }));
  });

  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }

  it('renders region and category select buttons', () => {
    const { getAllByText } = renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(getAllByText(/서울/)).not.toBeNull();
    expect(getAllByText(/한식/)).not.toBeNull();
  });

  it('renders links of restaurants', () => {
    const { container } = renderRestaurantsPage();

    expect(container.innerHTML).toContain('<a href="');
  });

  context('when click restaurant', () => {
    it('occurs handle event', () => {
      const { getByText } = renderRestaurantsPage();

      fireEvent.click(getByText('마법사주방'));

      expect(mockPush).toBeCalledWith('/restaurants/1');
    });
  });
});
