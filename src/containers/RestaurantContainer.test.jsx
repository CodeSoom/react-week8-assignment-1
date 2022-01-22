import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import RestaurantContainer from './RestaurantContainer';

import {
  changeReviewField,
  setRestaurant,
  sendReview,
  setReviews,
  clearReviewFields,
} from '../slice';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('react-redux');
jest.mock('../services/api');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  function renderRestaurantContainer() {
    return render(<RestaurantContainer restaurantId="1" />);
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
      reviewFields: {
        score: '',
        description: '',
      },
      accessToken: given.accessToken,
    }));
  });

  // thunk 테스트 1 - dispatch.mock 정보를 이용해서 테스트
  it('load conatiner, dipatch loadRestaurant', async () => {
    const getState = jest.fn();
    const thunkDispatch = jest.fn();

    renderRestaurantContainer();

    const action = dispatch.mock.calls[0][0];

    await action(thunkDispatch, getState);

    const actions = thunkDispatch.mock.calls.map((call) => call[0]);

    expect(actions).toEqual([
      setRestaurant(null),
      setRestaurant({}),
    ]);

    expect(dispatch).toBeCalled();
  });

  context('with restaurant', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [
        {
          id: 1, name: '테스터', description: '맛있어요', score: 1,
        },
      ],
    }));

    it('renders name and address', () => {
      const { container } = renderRestaurantContainer();

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('서울시');
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

          expect(dispatch).toBeCalledWith(changeReviewField({ name, value }));
        });
      });

      // thunk 테스트 2 - redux-mock-store 방식 사용
      it('renders “리뷰 남기기” button', async () => {
        const store = mockStore(() => ({
          reviewFields: {
            score: '5',
            description: '맛있어요 :)',
          },
        }));
        const { getByText } = renderRestaurantContainer();

        fireEvent.click(getByText('리뷰 남기기'));
        await store.dispatch(sendReview({ restaurantId: '1' })); // 버튼 클릭시, dispatch 요청을 redux-mock-store 에서 자동으로 발생하지 않아,
        // redux-mock-store 에서 관련된 actions 를 발생하기 위해 dispatch 발생

        // thunk test
        const actions = store.getActions();

        expect(actions).toEqual([
          setReviews(),
          clearReviewFields(),
        ]);

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
