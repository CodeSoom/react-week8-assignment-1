import { createSlice } from '@reduxjs/toolkit';

import { fetchRestaurants } from '../../services/api';

const slice = createSlice({
  name: 'restaurants',
  initialState: [],
  reducers: {
    setRestaurants(state, { payload }) {
      return payload;
    },
  },
});

export const { setRestaurants } = slice.actions;

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { regions: { selectedRegion }, categories: { selectedCategory } } = getState();

    if (!selectedRegion || !selectedCategory) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: selectedRegion.name,
      categoryId: selectedCategory.id,
    });

    dispatch(setRestaurants(restaurants));
  };
}

export default slice.reducer;
