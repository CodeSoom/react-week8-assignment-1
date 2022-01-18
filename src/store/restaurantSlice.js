import { createSlice } from '@reduxjs/toolkit';

import { equal } from '../utils';

const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
  selectedCategory: null,
  restaurants: [],
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
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
  },
});

export const {
  setRegions, setCategories, setRestaurants, setRestaurant, selectRegion, selectCategory,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
