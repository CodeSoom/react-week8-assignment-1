import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';
import { saveItem } from './services/storage';
import { equal } from './utils';

const initialReviewFields = {
  score: '',
  description: '',
};

export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: {
    reviews: [],
  },
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
  error: {
    type: '',
    description: '',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRegions: (state, { payload: regions }) => ({ ...state, regions }),
    setCategories: (state, { payload: categories }) => ({ ...state, categories }),
    setRestaurants: (state, { payload: restaurants }) => ({ ...state, restaurants }),
    setRestaurant: (state, { payload: restaurant }) => ({ ...state, restaurant }),
    setAccessToken: (state, { payload: accessToken }) => ({ ...state, accessToken }),
    setError: (state, { payload: { error } }) => ({ ...state, error }),
    logout: (state) => ({ ...state, accessToken: '' }),

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
  },
});

const { actions, reducer } = appSlice;

export const {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  setError,
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
      const result = await Promise.all([fetchRegions(), fetchCategories()]);

      dispatch(setRegions(result[0]));
      dispatch(setCategories(result[1]));
    } catch (e) {
      dispatch(
        setError({
          type: 'loadInitialData',
          description: e.message,
        }),
      );
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
    } catch (e) {
      dispatch(
        setError({
          type: 'loadRestaurants',
          description: e.message,
        }),
      );
    }
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    try {
      const restaurant = await fetchRestaurant({ restaurantId });
      dispatch(setRestaurant(restaurant));
    } catch (e) {
      dispatch(
        setError({
          type: 'loadRestaurant',
          description: e.message,
        }),
      );
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
    } catch (e) {
      dispatch(
        setError({
          type: 'requestLogin',
          description: e.message,
        }),
      );
    }
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    try {
      const restaurant = await fetchRestaurant({ restaurantId });

      dispatch(setReviews(restaurant.reviews));
    } catch (e) {
      dispatch(
        setError({
          type: 'loadReview',
          description: e.message,
        }),
      );
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
    } catch (e) {
      setError({
        type: 'sendReview',
        description: e.message,
      });
    }
  };
}
