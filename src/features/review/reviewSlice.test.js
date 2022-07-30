import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  changeField,
  clearFields,
  reviewFieldsSelector,
} from './reviewSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('reviewSlice', () => {
  let store;

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
