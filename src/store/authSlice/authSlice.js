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
    loginError: '',
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

    setLoginError(state, { payload: loginError }) {
      return {
        ...state,
        loginError,
      };
    },
  },
});

export const {
  changeLoginField,
  setAccessToken,
  logout,
  setLoginError,
} = actions;

export function requestLogin() {
  return async (dispatch, getState) => {
    try {
      const {
        auth: { loginFields: { email, password } },
      } = getState();

      const accessToken = await postLogin({ email, password });

      saveItem('accessToken', accessToken);

      dispatch(setAccessToken(accessToken));
      dispatch(setLoginError(''));
    } catch (e) {
      dispatch(setLoginError(e.message));
    }
  };
}

export const selectLoginFields = (state) => state.auth.loginFields;

export const selectAccessToken = (state) => state.auth.accessToken;

export const selectLoginError = (state) => state.auth.loginError;

export default reducer;
