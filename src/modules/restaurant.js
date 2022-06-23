import { createSlice } from '@reduxjs/toolkit';

const restaurant = createSlice({
  name: 'restaurant',
  initialState: {
    restaurants: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [],
    },
    restaurantDetail: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: {},
    },
  },
  reducers: {
    setRestaurants(
      state,
      {
        payload: restaurants, key, isLoading, isError, errorMessage,
      },
    ) {
      return {
        ...state,
        [key]: {
          ...state[key],
          isLoading,
          isError,
          errorMessage,
          data: restaurants,
        },
      };
    },

    setRestaurant(
      state,
      {
        paylod: restaurantDetail, key, isLoading, isError, errorMessage,
      },
    ) {
      return {
        ...state,
        [key]: {
          ...state[key],
          isLoading,
          isError,
          errorMessage,
          data: restaurantDetail,
        },
      };
    },
  },
});

export default restaurant;
