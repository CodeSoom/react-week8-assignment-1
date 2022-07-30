import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RESTAURANT from '../fixtures/restaurant';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      restaurant: given.restaurant,
    },

    review: {
      fields: {
        score: '',
        description: '',
      },
    },

    login: {
      accessToken: given.accessToken,
    },
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('load restaurant', () => {
    renderRestaurantContainer();

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    given('restaurant', () => RESTAURANT);

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마녀주방');
      expect(container).toHaveTextContent('서울시 강남구');
    });

    it('renders reviews', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('맛있어요');
    });

    context('without logged-in', () => {
      it('renders no review write field', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).toBeNull();
        expect(queryByLabelText('리뷰 내용')).toBeNull();
      });
    });

    context('with logged-in', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders review write fields', () => {
        const { queryByLabelText } = renderRestaurantContainer();

        expect(queryByLabelText('평점')).not.toBeNull();
        expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      });

      it('listens change events', () => {
        const { getByLabelText } = renderRestaurantContainer();

        const controls = [
          { label: '평점', name: 'score', value: '5' },
          { label: '리뷰 내용', name: 'description', value: '정말 최고 :)' },
        ];

        controls.forEach(({ label, name, value }) => {
          fireEvent.change(getByLabelText(label), { target: { value } });

          expect(dispatch).toBeCalledWith({
            type: 'changeReviewField',
            payload: { name, value },
          });
        });
      });

      it('renders “리뷰 남기기” button', () => {
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });
  });

  context('without restaurant', () => {
    given('restaurant', () => null);

    it('renders loading', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('Loading');
    });
  });
});
