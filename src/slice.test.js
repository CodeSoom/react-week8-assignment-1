import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  loadInitialData,
  sendReview,
  loadReview,
  requestLogin,
  loadRestaurant,
  loadRestaurants,
} from './slice';

import mockRestaurant from '../fixtures/restaurant';
import mockRegions from '../fixtures/regions';
import mockCategories from '../fixtures/categories';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('slice', () => {
  let store;

  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      loginFields: {
        email: '',
        password: '',
      },
      accessToken: '',
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

  describe('changeLoginField', () => {
    context('when email is changed', () => {
      it('changes only email field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'email', value: 'test' }),
        );

        expect(state.loginFields.email).toBe('test');
        expect(state.loginFields.password).toBe('password');
      });
    });

    context('when password is changed', () => {
      it('changes only password field', () => {
        const initialState = {
          loginFields: {
            email: 'email',
            password: 'password',
          },
        };

        const state = reducer(
          initialState,
          changeLoginField({ name: 'password', value: 'test' }),
        );

        expect(state.loginFields.email).toBe('email');
        expect(state.loginFields.password).toBe('test');
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes access token', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('TOKEN'));

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('logout', () => {
    it('clears access token', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(initialState, logout());

      expect(state.accessToken).toBe('');
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

  describe('loadInitialData', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('changes regions and categories', async () => {
      const initialState = {
        regions: [],
        categories: [],
      };

      const action = await store.dispatch(loadInitialData());
      const state = reducer(initialState, action);

      expect(state.regions).toHaveLength(mockRegions.length);
      expect(state.categories).toHaveLength(mockCategories.length);
    });
  });

  describe('loadRestaurants', () => {
    const initialState = {
      selectedRegion: { id: 1, name: '서울' },
      selectedCategory: { id: 1, name: '분식' },
      restaurants: [],
    };

    context('with selectedRegion and selectedCategory', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '분식' },
          restaurants: [],
        });
      });

      it('changes restaurants', async () => {
        const action = await store.dispatch(loadRestaurants());
        const state = reducer(initialState, action);

        expect(state.restaurants).toHaveLength(1);
      });
    });

    context('without selectedRegion', () => {
      beforeEach(() => {
        store = mockStore({
          selectedCategory: { id: 1, name: '한식' },
          restaurants: [],
        });
      });

      it('did not change restaurants', async () => {
        const action = await store.dispatch(loadRestaurants());
        const state = reducer(initialState, action);

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      beforeEach(() => {
        store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          restaurants: [],
        });
      });

      it('did not change restaurants', async () => {
        const action = await store.dispatch(loadRestaurants());
        const state = reducer(initialState, action);

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });

  describe('loadRestaurant', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('changes restaurant', async () => {
      const initialState = {
        restaurant: null,
      };

      const action = await store.dispatch(loadRestaurant({ restaurantId: 1 }));
      const state = reducer(initialState, action);

      expect(state.restaurant.id).toBe(mockRestaurant.id);
      expect(state.restaurant.name).toBe(mockRestaurant.name);
    });
  });

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: { email: '', password: '' },
      });
    });

    it('changes access token', async () => {
      const initialState = {
        accessToken: '',
        loginFields: { email: '', password: '' },
      };

      const action = await store.dispatch(requestLogin());
      const state = reducer(initialState, action);

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('loadReview', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('changes reviews of the current restaurant', async () => {
      const initialState = {
        restaurant: {
          reviews: [],
        },
      };

      const action = await store.dispatch(loadReview({ restaurantId: 1 }));
      const state = reducer(initialState, action);

      expect(state.restaurant.reviews).toHaveLength(mockRestaurant.reviews.length);
      expect(state.restaurant.reviews[0]).toEqual(mockRestaurant.reviews[0]);
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      store = mockStore({
        reviewFields: {
          score: 'SCORE',
          description: 'DESCRIPTION',
        },
      });
    });

    it('clears fields of review', async () => {
      const initialState = {
        reviewFields: {
          score: 'SCORE',
          description: 'DESCRIPTION',
        },
      };

      const action = await store.dispatch(sendReview({ restaurantId: 1 }));
      const state = reducer(initialState, action);

      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });
});
