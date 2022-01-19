import { createSlice } from '@reduxjs/toolkit';
import { equal } from './utils';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

import { saveItem } from './services/storage';

const initialReviewFields = {
  score: '',
  description: '',
};

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
    ...initialReviewFields,
  },
};

const reducers = {
  // 차이
  // 가독성의 변화, 함수 선언문과 표현식의 차이 정도?
  setRegions: (state, { payload: regions }) => ({ ...state, regions }),
  setCategories: (state, { payload: categories }) => ({ ...state, categories }),
  setRestaurants: (state, { payload: restaurants }) => ({
    ...state,
    restaurants,
  }),
  setRestaurant: (state, { payload: restaurant }) => ({ ...state, restaurant }),
  selectRegion(state, { payload: regionId }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },
  selectCategory(state, { payload: categoryId }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
  changeLoginField: (state, { payload: { name, value } }) => ({
    ...state,
    loginFields: {
      ...state.loginFields,
      [name]: value,
    },
  }),
  setAccessToken: (state, { payload: accessToken }) => ({
    ...state,
    accessToken,
  }),
  logout: (state) => ({
    ...state,
    accessToken: '',
  }),
  changeReviewField: (state, { payload: { name, value } }) => ({
    ...state,
    reviewFields: {
      ...state.reviewFields,
      [name]: value,
    },
  }),
  clearReviewFields: (state) => ({
    ...state,
    reviewFields: {
      ...initialReviewFields,
    },
  }),
  setReviews(state, { payload: reviews }) {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: {
        ...restaurant,
        reviews,
      },
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewFields,
  setReviews,
} = actions;

export default reducer;

export function loadInitialData() {
  return async (dispatch) => {
    try {
      const [regions, categories] = await Promise.all([
        fetchRegions(),
        fetchCategories(),
      ]);
      dispatch(setRegions(regions));
      dispatch(setCategories(categories));
    } catch (e) {
      console.error(e);
    }
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectedRegion: region, selectedCategory: category } = getState();

    if (!region || !category) {
      return;
    }

    try {
      const restaurants = await fetchRestaurants({
        regionName: region.name,
        categoryId: category.id,
      });
      dispatch(setRestaurants(restaurants));
    } catch (e) {
      console.error(e);
    }
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    try {
      dispatch(setRestaurant(null));

      const restaurant = await fetchRestaurant({ restaurantId });

      dispatch(setRestaurant(restaurant));
    } catch (e) {
      console.error(e);
    }
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const {
      loginFields: { email, password },
    } = getState();
    try {
      const accessToken = await postLogin({ email, password });
      saveItem('accessToken', accessToken);
      dispatch(setAccessToken(accessToken));
    } catch (e) {
      console.error(e);
    }
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    try {
      const restaurant = await fetchRestaurant({ restaurantId });

      dispatch(setReviews(restaurant.reviews));
    } catch (e) {
      console.error(e);
    }
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const {
      accessToken,
      reviewFields: { score, description },
    } = getState();

    try {
      await postReview({
        accessToken,
        restaurantId,
        score,
        description,
      });
    } catch (e) {
      console.error(e);
    }

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}
