import { createSlice } from '@reduxjs/toolkit';
import { equal } from '../utils/utils';

const category = createSlice({
  name: 'category',
  initialState: {
    categories: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [],
    },
    selectedCategory: null,
  },
  reducers: {
    setCategories(
      state,
      {
        payload: categories, key, isLoading, isError, errorMessage,
      },
    ) {
      return {
        ...state,
        [key]: {
          ...state[key],
          isLoading,
          isError,
          errorMessage,
          data: categories,
        },
      };
    },

    selectCategory(state, { payload: categoryId }) {
      const { categories } = state;

      return {
        ...state,
        selectedCategory: categories.data.find(equal('id', categoryId)),
      };
    },
  },
});

export default category;
