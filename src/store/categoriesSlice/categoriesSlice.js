import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '@/services/api';

import { equal } from '@/utils';

const { reducer, actions } = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: null,
  },
  reducers: {
    setCategories(state, { payload: categories }) {
      return {
        ...state,
        categories,
      };
    },

    selectCategory(state, { payload: categoryId }) {
      const { categories } = state;
      return {
        ...state,
        selectedCategory: categories.find(equal('id', categoryId)),
      };
    },
  },
});

export const {
  setCategories,
  selectCategory,
} = actions;

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export const selectCategories = (state) => state.categories.categories;

export const selectSelectedCategory = (state) => state.categories.selectSelectedCategory;

export default reducer;
