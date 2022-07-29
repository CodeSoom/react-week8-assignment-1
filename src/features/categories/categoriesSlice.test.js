import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  setCategories,
  selectCategory,
  loadCategories,
} from './categoriesSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('categoriesSlice', () => {
  let store;

  it('has initial state', () => {
    expect(reducer(undefined, { type: 'categories/action' })).toEqual({
      categories: [],
      selectedCategory: null,
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const prevState = {
        regions: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(prevState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const prevState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(prevState, selectCategory({ categoryId: 1 }));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('loadCategories', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('dispatches setRegions', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories([]));
    });
  });
});
