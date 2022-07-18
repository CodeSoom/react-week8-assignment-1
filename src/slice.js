import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

import { saveItem } from './services/storage';

import { equal } from './shared/utils';

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

export const loadInitialData = createAsyncThunk(
  'application/loadInitialData',
  async () => {
    const regions = await fetchRegions();
    const categories = await fetchCategories();
    return { regions, categories };
  },
);

export const loadRestaurants = createAsyncThunk(
  'application/loadRestaurants',
  async (_, { getState }) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) {
      return initialState.restaurants;
    }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });

    return restaurants;
  },
);

export const loadRestaurant = createAsyncThunk(
  'application/loadRestaurant',
  async ({ restaurantId }) => {
    const restaurant = await fetchRestaurant({ restaurantId });
    return restaurant;
  },
);

export const requestLogin = createAsyncThunk(
  'application/requestLogin',
  async (_, { getState }) => {
    const { loginFields: { email, password } } = getState();

    const accessToken = await postLogin({ email, password });
    return accessToken;
  },
);

export const loadReview = createAsyncThunk(
  'application/loadReview',
  async ({ restaurantId }) => {
    const restaurant = await fetchRestaurant({ restaurantId });
    return restaurant.reviews;
  },
);

export const sendReview = createAsyncThunk(
  'application/sendReview',
  async ({ restaurantId }, { dispatch, getState }) => {
    const { accessToken, reviewFields: { score, description } } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadReview({ restaurantId }));
  },
);

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers: {
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
  },
  extraReducers: {
    [loadInitialData.fulfilled]: (state, { payload: { regions, categories } }) => ({
      ...state,
      regions,
      categories,
    }),
    [loadRestaurants.fulfilled]: (state, { payload: restaurants }) => ({
      ...state,
      restaurants,
    }),
    [loadRestaurant.fulfilled]: (state, { payload: restaurant }) => ({
      ...state,
      restaurant,
    }),
    [requestLogin.fulfilled]: (state, { payload: accessToken }) => {
      saveItem('accessToken', accessToken);

      return {
        ...state,
        accessToken,
      };
    },
    [loadReview.fulfilled]: (state, { payload: reviews }) => ({
      ...state,
      restaurant: {
        ...state.restaurant,
        reviews,
      },
    }),
    [sendReview.fulfilled]: (state) => ({
      ...state,
      reviewFields: initialReviewFields,
    }),
  },
});

export const {
  setAccessToken,
  selectRegion,
  selectCategory,
  changeLoginField,
  changeReviewField,
  logout,
} = actions;

export default reducer;
