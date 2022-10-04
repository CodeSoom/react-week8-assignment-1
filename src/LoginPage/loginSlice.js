import { createSlice } from '@reduxjs/toolkit';

import { postLogin } from '../services/api';

import { saveItem, deleteItem } from '../services/storage';

const { actions, reducer } = createSlice({
  name: 'login',

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
    const { login: { loginFields: { email, password } } } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export function deleteAccessToken() {
  return (dispatch) => {
    deleteItem('accessToken');

    dispatch(logout());
  };
}

export default reducer;
