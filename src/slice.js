import { createSlice } from '@reduxjs/toolkit';

import { equal } from './utils';

const initialReviewFields = {
  score: '',
  description: '',
};

const { actions, reducer } = createSlice({
  name: '',
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
    accessToken: '',
    reviewFields: {
      ...initialReviewFields,
    },
  },
  reducers: {
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

    setRestaurant(state, { payload: { restaurant } }) {
      return {
        ...state,
        restaurant,
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

    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    setAccessToken(state, { payload: { accessToken } }) {
      return {
        ...state,
        accessToken,
      };
    },

    logout(state) {
      return {
        ...state,
        accessToken: '',
      };
    },

    changeReviewField(state, { payload: { name, value } }) {
      return {
        ...state,
        reviewFields: {
          ...state.reviewFields,
          [name]: value,
        },
      };
    },

    clearReviewFields(state) {
      return {
        ...state,
        reviewFields: {
          ...initialReviewFields,
        },
      };
    },

    setReviews(state, { payload: { reviews } }) {
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

export { actions, reducer }; // 슬라이스 이름 및 초기 상태 값을 받아서 자동으로 만들어진
// slice reducer와 action creator, action types 를 export!!!
