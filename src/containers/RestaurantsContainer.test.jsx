import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const handleClick = jest.fn();

  function renderRestaurantsContainer(onClick) {
    return render(<RestaurantsContainer onClickRestaurant={onClick} />);
  }

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: given.restaurants,
    }));
  });

  context('with Restaurants', () => {
    given('restaurants', () => ([
      { id: 1, name: '마법사주방' },
    ]));

    it('renders restaurants', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('마법사주방');
    });
  });

  context('without Restaurants', () => {
    given('restaurants', () => ([]));

    it('renders restaurants', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('레스토랑이 없습니다');
    });
  });

  context('when restaurant is clicked', () => {
    given('restaurants', () => ([
      { id: 1, name: '마법사주방' },
    ]));

    it('occurs click events', () => {
      const { getByText } = renderRestaurantsContainer(handleClick);

      fireEvent.click(getByText('마법사주방'));

      expect(handleClick).toBeCalledWith({ id: 1, name: '마법사주방' });
    });
  });
});
