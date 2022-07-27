import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '@/services/api';

const { reducer, actions } = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {

    setCategories(state, { payload: categories }) {
      return {
        ...state,
        categories,
      };
    },

  },
});

export const {
  setCategories,
} = actions;

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export const selectCategories = (state) => state.categories.categories;

export default reducer;
