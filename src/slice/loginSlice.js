import { createSlice } from '@reduxjs/toolkit';

import { saveItem } from '../services/storage';

import { postLogin } from '../services/api';

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
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
};

const { actions, reducer } = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },

    logout(state) {
      saveItem('accessToken', '');
      return {
        ...state,
        accessToken: '',
      };
    },
  },
});

export const {
  changeLoginField,
  setAccessToken,
  logout,
} = actions;

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields } = getState();
    const { email, password } = loginFields;

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export default reducer;
