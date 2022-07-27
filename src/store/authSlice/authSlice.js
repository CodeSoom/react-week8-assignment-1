import { createSlice } from '@reduxjs/toolkit';

import { postLogin } from '@/services/api';

import { saveItem } from '@/services/storage';

const { reducer, actions } = createSlice({
  name: 'auth',
  initialState: {
    loginFields: {
      email: '',
      password: '',
    },
    accessToken: '',
  },
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
    const { loginFields: { email, password } } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export const selectLoginFields = (state) => state.auth.loginFields;

export const selectAccessToken = (state) => state.auth.accessToken;

export default reducer;
