import { createSlice } from '@reduxjs/toolkit';

import { fetchRestaurants } from '@/services/api';

const { reducer, actions } = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [],
  },
  reducers: {
    setRestaurants(state, { payload: restaurants }) {
      return {
        ...state,
        restaurants,
      };
    },
  },
});

export const {
  setRestaurants,
} = actions;

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      regions: { selectedRegion: region },
      categories: { selectedCategory: category },
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

export const selectRestaurants = (state) => state.restaurants.restaurants;

export default reducer;
