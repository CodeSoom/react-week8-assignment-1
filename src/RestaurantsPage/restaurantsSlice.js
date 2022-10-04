import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

import { equal } from '../utils';

const { actions, reducer } = createSlice({
  name: 'restaurants',

  initialState: {
    regions: [],
    categories: [],
    restaurants: [],
    selectedRegion: null,
    selectedCategory: null,
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
        categories: categories.filter((category) => !['과자', '테스트', '음료', '사탕', 'qq'].includes(category.name)),
      };
    },

    setRestaurants(state, { payload: restaurants }) {
      return {
        ...state,
        restaurants,
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
  },
});

export const {
  setRegions,
  setCategories,
  setRestaurants,
  selectRegion,
  selectCategory,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      restaurants: {
        selectedRegion: region,
        selectedCategory: category,
      },
    } = getState();

    if (!region || !category) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export default reducer;
