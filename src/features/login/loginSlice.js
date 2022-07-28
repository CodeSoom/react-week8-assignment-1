import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  },
});

export const { changeFields } = loginSlice.actions;

export default loginSlice.reducer;
