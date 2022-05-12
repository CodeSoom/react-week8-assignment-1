import { createSlice } from '@reduxjs/toolkit';

import { equal } from '../../utils';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../../services/api';

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: null,
  selectedCategory: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'restaurants',
  initialState,
  reducers,
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
    dispatch(setRegions({ regions }));

    const categories = await fetchCategories();
    dispatch(setCategories({ categories }));
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

    dispatch(setRestaurants({ restaurants }));
  };
}

const get = (key) => (obj) => obj.restaurants[key];

export const getRegions = get('regions');
export const getCategories = get('categories');
export const getRestaurants = get('restaurants');
export const getSelectedRegions = get('selectedRegion');
export const getSelectedCategory = get('selectedCategory');

export default reducer;
