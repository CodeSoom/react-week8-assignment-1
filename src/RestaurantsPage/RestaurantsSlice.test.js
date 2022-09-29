import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
  loadInitialData,
  loadRestaurants,
} from './RestaurantsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('RestaurantsSlice', () => {
  describe('reducer', () => {
    context('when previous state is undefined', () => {
      const initialState = {
        regions: [],
        categories: [],
        restaurants: [],
        selectedRegion: null,
        selectedCategory: null,
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

    describe('setCategories', () => {
      it('changes categories', () => {
        const initialState = {
          categories: [],
        };

        const categories = [
          { id: 1, name: '한식' },
        ];

        const state = reducer(initialState, setCategories(categories));

        expect(state.categories).toHaveLength(1);
      });
    });

    describe('setRestaurants', () => {
      it('changes restaurants', () => {
        const initialState = {
          restaurants: [],
        };

        const restaurants = [
          { id: 1, name: '마법사주방' },
        ];

        const state = reducer(initialState, setRestaurants(restaurants));

        expect(state.restaurants).toHaveLength(1);
      });
    });

    describe('selectRegion', () => {
      it('changes selected region', () => {
        const initialState = {
          regions: [
            { id: 1, name: '서울' },
          ],
          selectedRegion: null,
        };

        const state = reducer(initialState, selectRegion(1));

        expect(state.selectedRegion).toEqual({
          id: 1,
          name: '서울',
        });
      });
    });

    describe('selectCategory', () => {
      it('changes selected category', () => {
        const initialState = {
          categories: [
            { id: 1, name: '한식' },
          ],
          selectedCategory: null,
        };

        const state = reducer(initialState, selectCategory(1));

        expect(state.selectedCategory).toEqual({
          id: 1,
          name: '한식',
        });
      });
    });
  });

  describe('actions', () => {
    let store;

    describe('loadInitialData', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('runs setRegions and setCategories', async () => {
        await store.dispatch(loadInitialData());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRegions([]));
        expect(actions[1]).toEqual(setCategories([]));
      });
    });

    describe('loadRestaurants', () => {
      context('with selectedRegion and selectedCategory', () => {
        beforeEach(() => {
          store = mockStore({
            Restaurants: {
              selectedRegion: { id: 1, name: '서울' },
              selectedCategory: { id: 1, name: '한식' },
            },
          });
        });

        it('runs setRestaurants', async () => {
          await store.dispatch(loadRestaurants());

          const actions = store.getActions();

          expect(actions[0]).toEqual(setRestaurants([]));
        });
      });

      context('without selectedRegion', () => {
        beforeEach(() => {
          store = mockStore({
            Restaurants: {
              selectedCategory: { id: 1, name: '한식' },
            },
          });
        });

        it('does\'nt run any actions', async () => {
          await store.dispatch(loadRestaurants());

          const actions = store.getActions();

          expect(actions).toHaveLength(0);
        });
      });

      context('without selectedCategory', () => {
        beforeEach(() => {
          store = mockStore({
            Restaurants: {
              selectedRegion: { id: 1, name: '서울' },
            },
          });
        });

        it('does\'nt run any actions', async () => {
          await store.dispatch(loadRestaurants());

          const actions = store.getActions();

          expect(actions).toHaveLength(0);
        });
      });
    });
  });
});
