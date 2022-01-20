// @ts-check
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

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
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
    apiStatus: {
      fetchRestaurants: 'IDLE',
      fetchRestaurant: 'IDLE',
      postLogin: 'IDLE',
      postReview: 'IDLE',
    },
  },
  reducers: {
    setRegions(state, { payload: regions }) {
      return {
        ...state,
        regions,
      };
    },

    setCategories(state, { payload: categories }) {
      return {
        ...state,
        categories,
      };
    },

    setRestaurants(state, { payload: restaurants }) {
      return {
        ...state,
        restaurants,
      };
    },

    setRestaurant(state, { payload: restaurant }) {
      return {
        ...state,
        restaurant,
      };
    },

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

    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },

    logout(state) {
      return {
        ...state,
        accessToken: '',
      };
    },

    changeReviewField(state, { payload: { name, value } }) {
      return {
        ...state,
        reviewFields: {
          ...state.reviewFields,
          [name]: value,
        },
      };
    },

    clearReviewFields(state) {
      return {
        ...state,
        reviewFields: {
          ...initialReviewFields,
        },
      };
    },

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
    setFetchRestaurantsStatus(state, { payload: status }) {
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          fetchRestaurants: status,
        },
      };
    },
    setPostLoginStatus(state, { payload: status }) {
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          postLogin: status,
        },
      };
    },
    setFetchRestaurantStatus(state, { payload: status }) {
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          fetchRestaurant: status,
        },
      };
    },
    setPostReviewStatus(state, { payload: status }) {
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          postReview: status,
        },
      };
    },
  },
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
  setFetchRestaurantsStatus,
  setPostLoginStatus,
  setFetchRestaurantStatus,
  setPostReviewStatus,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    try {
      const [regions, categories] = await Promise.all([fetchRegions(), fetchCategories()]);
      dispatch(setRegions(regions));
      dispatch(setCategories(categories));
    } catch (error) {
      dispatch(setRegions([]));
      dispatch(setCategories([]));
    }
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) {
      return;
    }

    try {
      const restaurants = await fetchRestaurants({
        regionName: region.name,
        categoryId: category.id,
      });
      dispatch(setRestaurants(restaurants));
    } catch (error) {
      setFetchRestaurantsStatus();
    }
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    try {
      const restaurant = await fetchRestaurant({ restaurantId });

      dispatch(setRestaurant(restaurant));
    } catch (error) {
      setFetchRestaurantStatus();
    }
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    try {
      const accessToken = await postLogin({ email, password });

      saveItem('accessToken', accessToken);

      dispatch(setAccessToken(accessToken));
    } catch (error) {
      setPostLoginStatus();
    }
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    try {
      const restaurant = await fetchRestaurant({ restaurantId });

      dispatch(setReviews(restaurant.reviews));
    } catch (error) {
      setFetchRestaurantStatus();
    }
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewFields: { score, description } } = getState();

    try {
      await postReview({
        accessToken, restaurantId, score, description,
      });

      dispatch(loadReview({ restaurantId }));
      dispatch(clearReviewFields());
    } catch (error) {
      setPostReviewStatus();
    }
  };
}

export { actions, reducer };
