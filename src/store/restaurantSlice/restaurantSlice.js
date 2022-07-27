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

export const {
  setRestaurant,
  setReviews,
} = actions;

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(restaurant.reviews));
  };
}

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default reducer;
