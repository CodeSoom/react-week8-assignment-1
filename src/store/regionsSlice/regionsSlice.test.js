import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  loadRegions,
  setRegions,
} from './regionsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/services/api');

describe('regionsSlice', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('loadRegions', () => {
    let store;

    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setRegions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([]));
    });
  });
});
