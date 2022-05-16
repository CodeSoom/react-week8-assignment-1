import { createSlice } from '@reduxjs/toolkit';

import { saveItem } from '../../services/storage';

import {
  postLogin,
} from '../../services/api';

const initialState = {
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
};

const reducers = {
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
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const {
  changeLoginField,
  setAccessToken,
  logout,
} = actions;

export function requestLogin() {
  return async (dispatch, getState) => {
    const { auth: { loginFields: { email, password } } } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken({ accessToken }));
  };
}

const get = (key) => (obj) => obj.auth[key];

export const getLoginFields = get('loginFields');
export const getAccessToken = get('accessToken');

export default reducer;
