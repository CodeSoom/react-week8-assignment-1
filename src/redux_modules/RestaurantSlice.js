/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { equal } from '../utils';

const { actions, reducer } = createSlice({
  name: 'restaurant',
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
    accessToken: null,
    reviewFields: {
      score: '',
      description: '',
    },
  },

  reducers: {
    setRegions(state, { payload }) {
      state.regions = payload;
    },

    setCategories(state, { payload }) {
      state.categories = payload;
    },

    setRestaurants(state, { payload }) {
      state.restaurants = payload;
    },

    setRestaurant(state, { payload }) {
      state.restaurant = payload;
    },

    selectRegion(state, { payload: regionId }) {
      const { regions } = state;

      state.selectedRegion = regions.find(equal('id', regionId));
    },

    selectCategory(state, { payload: categoryId }) {
      const { categories } = state;

      state.selectedCategory = categories.find(equal('id', categoryId));
    },

    changeLoginField(state, { payload: { name, value } }) {
      state.loginFields[name] = value;
    },

    setAccessToken(state, { payload }) {
      state.accessToken = payload;
    },

    logout(state) {
      state.accessToken = '';
    },

    changeReviewField(state, { payload: { name, value } }) {
      state.reviewFields[name] = value;
    },

    clearReviewFields(state) {
      state.reviewFields = {
        score: '',
        description: '',
      };
    },

    setReviews(state, { payload }) {
      state.restaurant.reviews = payload;
    },
  },
});

export const {
  setRegions, setCategories, setRestaurants, setRestaurant,
  selectRegion, selectCategory,
  changeLoginField, setAccessToken, logout,
  changeReviewField, clearReviewFields, setReviews,
} = actions;

export default reducer;
