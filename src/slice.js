import { createSlice } from '@reduxjs/toolkit';

import { saveItem } from './services/storage';

import {
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  restaurant: null,
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
  reviewFields: {
    ...initialReviewFields,
  },
};

const reducers = {
  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
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
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  setRestaurant,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewFields,
  setReviews,
} = actions;

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant({ restaurant: null }));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant({ restaurant }));
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken({ accessToken }));
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews({ reviews: restaurant.reviews }));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewFields: { score, description } } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

export default reducer;
