import { createSlice } from '@reduxjs/toolkit';

import { fetchRestaurant } from '@/services/api';

const { reducer, actions } = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: null,
  },
  reducers: {
    setRestaurant(state, { payload: restaurant }) {
      return {
        ...state,
        restaurant,
      };
    },
  },
});

export const {
  setRestaurant,
} = actions;

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default reducer;
