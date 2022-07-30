import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, { setRestaurant, loadRestaurant } from './restaurantSlice';

import RESTAURANT from '../../../fixtures/restaurant';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('restaurantSlice', () => {
  describe('reducer', () => {
    it('has initial state', () => {
      expect(reducer(undefined, { type: 'restaurant/action' }))
        .toEqual({
          restaurant: null,
        });
    });
  });

  describe('actions', () => {
    describe('setRestaurant', () => {
      it('changes restaurant', () => {
        const prevState = {
          restaurant: null,
        };

        const state = reducer(prevState, setRestaurant(RESTAURANT));

        expect(state.restaurant).toEqual(RESTAURANT);
      });
    });

    describe('loadRestaurant', () => {
      const store = mockStore({});

      beforeEach(() => {
        store.clearActions();
      });

      it('dispatches setRestaurant', async () => {
        await store.dispatch(loadRestaurant({ restaurantId: 1 }));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurant(null));
        expect(actions[1]).toEqual(setRestaurant({}));
      });
    });
  });
});
