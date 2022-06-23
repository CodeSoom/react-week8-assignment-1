import { createSlice } from '@reduxjs/toolkit';
import { equal } from '../utils/utils';

const region = createSlice({
  name: 'region',
  initialState: {
    regions: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [],
    },
    selectedRegion: null,
  },
  reducers: {
    setRegions(
      state,
      {
        payload: regions, key, isLoading, isError, errorMessage,
      },
    ) {
      return {
        ...state,
        regions,
        [key]: {
          ...state[key],
          isLoading,
          isError,
          errorMessage,
          date: regions,
        },
      };
    },

    selectRegion(state, { payload: regionId }) {
      const { regions } = state;

      return {
        ...state,
        selectedRegion: regions.data.find(equal('id', regionId)),
      };
    },
  },
});

export default region;
