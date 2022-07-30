import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  changeField,
  clearFields,
  sendReview,
  reviewFieldsSelector,
} from './reviewSlice';

import { setReviews } from '../restaurant/restaurantSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('reviewSlice', () => {
  describe('reducer', () => {
    it('has initial state', () => {
      expect(reducer(undefined, { type: 'review/action' })).toEqual({
        fields: {
          score: '',
          description: '',
        },
      });
    });
  });

  describe('actions', () => {
    describe('changeField', () => {
      it('change field', () => {
        const prevState = {
          fields: { score: '', description: '' },
        };

        const state = reducer(prevState, changeField({ name: 'score', value: '5' }));

        expect(state.fields.score).toBe('5');
      });
    });

    describe('clearFields', () => {
      it('clear fields', () => {
        const prevState = {
          fields: { score: '5', description: 'Good!' },
        };

        const state = reducer(prevState, clearFields());

        expect(state.fields).toEqual({
          score: '',
          description: '',
        });
      });
    });

    describe('sendReview', () => {
      const store = mockStore({
        login: { accessToken: 'ACCESS_TOKEN' },
        review: {
          fields: { score: '', description: '' },
        },
      });

      beforeEach(() => {
        store.clearActions();
      });

      it('dispatches setReviews and clearFields', async () => {
        await store.dispatch(sendReview({ restaurantId: 1 }));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setReviews());
        expect(actions[1]).toEqual(clearFields());
      });
    });
  });

  describe('selector', () => {
    describe('reviewFieldsSelector', () => {
      it('returns review fields', () => {
        const result = reviewFieldsSelector({
          review: {
            fields: {},
          },
        });

        expect(result).toEqual({});
      });
    });
  });
});
