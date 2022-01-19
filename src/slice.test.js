import store from './store';
import {
  loadInitialData,
  setRegions,
  setCategories,
  loadRestaurants,
  loadRestaurant,
  setRestaurants,
  setRestaurant,
  setReviews,
  selectRegion,
  selectCategory,
  setAccessToken,
  requestLogin,
  loadReview,
  sendReview,
  clearReviewFields,
  changeLoginField,
  changeReviewField,
  logout,
} from './slice';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('slice', () => {
  describe('setRegions', () => {
    it('changes regions', () => {
      const regions = [{ id: 1, name: '서울' }];
      store.dispatch(setRegions(regions));

      const state = store.getState();

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [{ id: 1, name: '한식' }];
      store.dispatch(setCategories(categories));

      const state = store.getState();
      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes Restaurants', () => {
      const restaurants = [{ id: 1, name: '마법사주방' }];
      store.dispatch(setRestaurants(restaurants));

      const state = store.getState();

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes Restaurant', () => {
      const restaurant = { id: 1, name: '마법사주방' };

      store.dispatch(setRestaurant(restaurant));

      const state = store.getState();

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      store.dispatch(selectRegion(1));

      const state = store.getState();

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      store.dispatch(selectCategory(1));

      const state = store.getState();

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('changeLoginField', () => {
    it('changes selected category', () => {
      store.dispatch(changeLoginField({ name: 'email', value: 'test' }));

      const state = store.getState();

      expect(state.loginFields.email).toBe('test');
      expect(state.loginFields.password).toBe('password');
    });
  });

  describe('setAccessToken', () => {
    it('setAccessToken', () => {
      store.dispatch(setAccessToken('TOKEN'));

      const state = store.getState();

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('logout', () => {
    it('logout', () => {
      store.dispatch(logout());

      const state = store.getState();

      expect(state.accessToken).toBe('');
    });
  });

  describe('changeReviewField', () => {
    it('changes selected category', () => {
      store.dispatch(changeReviewField({ name: 'score', value: '5' }));

      const state = store.getState();

      expect(state.reviewFields.score).toBe('5');
    });
  });

  describe('clearReviewFields', () => {
    it('changes selected category', () => {
      store.dispatch(clearReviewFields());

      const state = store.getState();

      expect(state.reviewFields.score).toBe('');
      expect(state.reviewFields.description).toBe('');
    });
  });

  describe('setReviews', () => {
    it('changes selected category', () => {
      const reviews = [
        {
          id: 1,
          name: '테스터',
          description: '맛있어요',
          score: 1,
        },
      ];
      store.dispatch(setReviews(reviews));

      const state = store.getState();

      expect(state.restaurant.reviews).toHaveLength(reviews.length);
      expect(state.restaurant.reviews[0]).toEqual(reviews[0]);
    });
  });

  let storee;
  describe('loadInitialData', () => {
    beforeEach(() => {
      storee = mockStore({});
    });

    it('runs setRegions and setCategories', async () => {
      await storee.dispatch(loadInitialData());

      const actions = storee.getActions();

      expect(actions[0]).toEqual(setRegions([]));
      expect(actions[1]).toEqual(setCategories([]));
    });
  });

  describe('loadRestaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      beforeEach(() => {
        storee = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 1, name: '한식' },
        });
      });

      it('runs setRestaurants', async () => {
        await storee.dispatch(loadRestaurants());

        const actions = storee.getActions();

        expect(actions[0]).toEqual(setRestaurants([]));
      });
    });

    context('without selectedRegion', () => {
      beforeEach(() => {
        storee = mockStore({
          selectedCategory: { id: 1, name: '한식' },
        });
      });

      it("does'nt run any actions", async () => {
        await storee.dispatch(loadRestaurants());

        const actions = storee.getActions();

        expect(actions).toHaveLength(0);
      });
    });

    context('without selectedCategory', () => {
      beforeEach(() => {
        storee = mockStore({
          selectedRegion: { id: 1, name: '서울' },
        });
      });

      it("does'nt run any actions", async () => {
        await storee.dispatch(loadRestaurants());

        const actions = storee.getActions();

        expect(actions).toHaveLength(0);
      });
    });
  });

  describe('loadRestaurant', () => {
    beforeEach(() => {
      storee = mockStore({});
    });

    it('dispatchs setRestaurant', async () => {
      await storee.dispatch(loadRestaurant({ restaurantId: 1 }));

      const actions = storee.getActions();

      expect(actions[0]).toEqual(setRestaurant(null));
      expect(actions[1]).toEqual(setRestaurant({}));
    });
  });

  describe('requestLogin', () => {
    beforeEach(() => {
      storee = mockStore({
        loginFields: { email: '', password: '' },
      });
    });

    it('dispatchs setAccessToken', async () => {
      await storee.dispatch(requestLogin());

      const actions = storee.getActions();

      expect(actions[0]).toEqual(setAccessToken({}));
    });
  });

  describe('loadReview', () => {
    beforeEach(() => {
      storee = mockStore({
        loginFields: { email: '', password: '' },
      });
    });

    it('dispatchs setReviews', async () => {
      await storee.dispatch(loadReview({ restaurantId: 1 }));

      const actions = storee.getActions();

      expect(actions[0]).toEqual(setReviews());
    });
  });

  describe('sendReview', () => {
    beforeEach(() => {
      storee = mockStore({
        accessToken: '',
        reviewFields: {
          score: 1,
          description: '',
        },
      });
    });

    it('dispatchs clearReviewFields', async () => {
      await storee.dispatch(sendReview({ restaurantId: 1 }));

      const actions = storee.getActions();

      expect(actions[0]).toEqual(clearReviewFields());
    });
  });
});
