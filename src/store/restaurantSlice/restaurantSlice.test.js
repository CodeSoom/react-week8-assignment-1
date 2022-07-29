import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  changeReviewField,
  clearReviewFields,
  loadRestaurant,
  loadReview,
  sendReview,
  setRestaurant,
  setReviews,
} from './restaurantSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/services/api');

describe('restaurantSlice', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      restaurant: null,
      reviewFields: {
        score: '',
        description: '',
      },
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('setReviews', () => {
    it('changes reviews of the current restaurant', () => {
      const reviews = [
        {
          id: 1, name: '테스터', description: '맛있어요', score: 1,
        },
      ];

      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const state = reducer(initialState, setReviews(reviews));

      expect(state.restaurant.reviews).toHaveLength(reviews.length);
      expect(state.restaurant.reviews[0]).toEqual(reviews[0]);
    });
  });

  describe('changeReviewField', () => {
    it('changes a field of review', () => {
      const initialState = {
        reviewFields: {
          score: '',
          description: '',
        },
      };

      const state = reducer(
        initialState,
        changeReviewField({ name: 'score', value: '5' }),
      );

      expect(state.reviewFields.score).toBe('5');
    });
  });

  describe('clearReviewFields', () => {
    it('clears fields of review', () => {
      const initialState = {
        reviewFields: {
          score: 'SCORE',
          description: 'DESCRIPTION',
        },
      };

      const state = reducer(initialState, clearReviewFields());

      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });

  describe('loadRestaurant', () => {
    let store;

    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatchs setRestaurant', async () => {
      await store.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe('loadReview', () => {
    let store;

    beforeEach(() => {
      store = mockStore({
        loginFields: { email: '', password: '' },
      });
    });

    it('dispatchs setReviews', async () => {
      await store.dispatch(loadReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setReviews());
    });
  });

  describe('sendReview', () => {
    let store;

    beforeEach(() => {
      store = mockStore({
        auth: { accessToken: '' },
        restaurant: {
          reviewFields: {
            score: 1,
            description: '',
          },
        },
      });
    });

    it('dispatchs clearReviewFields', async () => {
      await store.dispatch(sendReview({ restaurantId: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(clearReviewFields());
    });
  });
});
