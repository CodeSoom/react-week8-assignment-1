import { createSlice } from '@reduxjs/toolkit';

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

export const loginFieldsSelector = (state) => state.login.fields;
export const accessTokenSelector = (state) => state.accessToken;

export default loginSlice.reducer;
