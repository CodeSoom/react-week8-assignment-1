import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RESTAURANT from '../../../fixtures/restaurant';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      restaurant: {
        restaurant: RESTAURANT,
      },

      review: {
        fields: {
          score: '',
          description: '',
        },
      },

      login: {
        accessToken: '',
      },
    }));
  });

  context('with params props', () => {
    it('renders name', () => {
      const params = { id: '1' };

      const { container } = render(
        <RestaurantPage params={params} />,
      );

      expect(container).toHaveTextContent('마녀주방');
    });
  });

  context('without params props', () => {
    it('renders name', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantPage />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('마녀주방');
    });
  });
});
