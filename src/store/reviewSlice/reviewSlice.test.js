import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  changeReviewField,
  clearReviewFields,
  sendReview,
} from './reviewSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/services/api');

describe('authSlice', () => {
  context('when previous state is undefined', () => {
    const initialState = {
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

  describe('sendReview', () => {
    let store;

    beforeEach(() => {
      store = mockStore({
        auth: { accessToken: '' },
        review: {
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
