import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from '../../services/api';

import { equal } from '../../utils';

const slice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: null,
  },
  reducers: {
    setCategories(state, { payload }) {
      return {
        ...state,
        categories: payload,
      };
    },

    selectCategory(state, { payload: { categoryId } }) {
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
} = slice.actions;

export function loadCategories() {
  return async (dispatch) => {
    const regions = await fetchCategories();

    dispatch(setCategories(regions));
  };
}

// @TODO 중복되는 네이밍 수정
export const categoriesSelector = (state) => state.categories.categories;
export const selectedCategorySelector = (state) => state.categories.selectedCategory;

export default slice.reducer;
