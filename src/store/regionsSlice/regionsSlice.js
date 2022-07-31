import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchRegions } from '@/services/api';

import { equal } from '@/utils';

export const loadRegions = createAsyncThunk(
  'regions/loadRegions', async () => {
    const regions = await fetchRegions();
    return regions;
  },
);

const { reducer, actions } = createSlice({
  name: 'regions',
  initialState: {
    regions: {
      data: [],
      status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
      error: '',
    },
    selectedRegion: null,
  },
  reducers: {
    setRegions(state, { payload: regions }) {
      return {
        ...state,
        regions,
      };
    },

    selectRegion(state, { payload: regionId }) {
      const { regions } = state;
      return {
        ...state,
        selectedRegion: regions.find(equal('id', regionId)),
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadRegions.pending, (state) => {
        const { regions } = state;
        return {
          ...state,
          regions: {
            ...regions,
            status: 'loading',
          },
        };
      })
      .addCase(loadRegions.fulfilled, (state, { payload: data }) => {
        const { regions } = state;
        return {
          ...state,
          regions: {
            ...regions,
            data,
            status: 'succeeded',
          },
        };
      })
      .addCase(loadRegions.rejected, (state, { error: { message } }) => {
        const { regions } = state;
        return {
          ...state,
          regions: {
            ...regions,
            status: 'failed',
            error: message,
          },
        };
      });
  },
});

export const {
  setRegions,
  selectRegion,
} = actions;

export const selectRegions = (state) => state.regions.regions;

export const selectSelectedRegion = (state) => state.regions.selectedRegion;

export default reducer;
