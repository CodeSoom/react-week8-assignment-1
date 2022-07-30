import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import RESTAURANTS from '../../../fixtures/restaurants';

import reducer, {
  setRestaurants,
  loadRestaurants,
} from './restaurantsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('restaurantsSlice', () => {
  describe('reducer', () => {
    it('has initial state', () => {
      expect(reducer(undefined, { type: 'restaurants/action' })).toEqual([]);
    });
  });

  describe('actions', () => {
    describe('setRestaurants', () => {
      it('changes state', () => {
        const prevState = [];

        const state = reducer(prevState, setRestaurants(RESTAURANTS));

        expect(state).toHaveLength(RESTAURANTS.length);
      });
    });

    describe('loadRestaurants', () => {
      context('with selectedCategory and selectedRegion', () => {
        const store = mockStore({
          regions: {
            selectedRegion: { id: 1, name: '서울' },
          },

          categories: {
            selectedCategory: { id: 1, name: '한식' },
          },
        });

        beforeEach(() => {
          store.clearActions();
        });

        it('dispatches setRestaurants', async () => {
          await store.dispatch(loadRestaurants());

          const actions = store.getActions();

          expect(actions[0]).toEqual(setRestaurants([]));
        });
      });

      context('without selectedCategory', () => {
        const store = mockStore({
          regions: {
            selectedRegion: { id: 1, name: '서울' },
          },

          categories: {
            selectedCategory: null,
          },
        });

        beforeEach(() => {
          store.clearActions();
        });

        it('not dispatches any actions', async () => {
          await store.dispatch(loadRestaurants());

          const actions = store.getActions();

          expect(actions).toHaveLength(0);
        });
      });

      context('without selectedRegion', () => {
        const store = mockStore({
          regions: {
            selectedRegion: null,
          },

          categories: {
            selectedCategory: { id: 1, name: '한식' },
          },
        });

        beforeEach(() => {
          store.clearActions();
        });

        it('not dispatches any actions', async () => {
          await store.dispatch(loadRestaurants());

          const actions = store.getActions();

          expect(actions).toHaveLength(0);
        });
      });
    });
  });
});
