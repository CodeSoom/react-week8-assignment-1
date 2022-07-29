import { createSlice } from '@reduxjs/toolkit';

import { postLogin } from '../../services/api';

import { saveItem } from '../../services/storage';

const initialState = {
  accessToken: '',
  fields: {
    email: '',
    password: '',
  },
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeFields(state, { payload: { name, value } }) {
      const { fields } = state;

      return {
        ...state,
        fields: {
          ...fields,
          [name]: value,
        },
      };
    },

    setAccessToken(state, { payload }) {
      return {
        ...state,
        accessToken: payload,
      };
    },
  },
});

export const {
  changeFields,
  setAccessToken,
} = loginSlice.actions;

export function requestLogin() {
  return async (dispatch, getState) => {
    const { login: { fields } } = getState();

    const accessToken = await postLogin(fields);

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export const loginFieldsSelector = (state) => state.login.fields;
export const accessTokenSelector = (state) => state.login.accessToken;

export default loginSlice.reducer;
