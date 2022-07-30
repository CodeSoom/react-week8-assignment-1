import { createSlice } from '@reduxjs/toolkit';

import { fetchRestaurant } from '../../services/api';

const slice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: null,
  },
  reducers: {
    setRestaurant(state, { payload }) {
      return {
        ...state,
        restaurant: payload,
      };
    },

    setReviews(state, { payload }) {
      const { restaurant } = state;

      return {
        ...state,
        restaurant: {
          ...restaurant,
          reviews: payload,
        },
      };
    },
  },
});

export const { setRestaurant, setReviews } = slice.actions;

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export const restaurantSelector = (state) => state.restaurant.restaurant;

export default slice.reducer;
