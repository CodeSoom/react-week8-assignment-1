import { createSlice } from '@reduxjs/toolkit';

import { fetchRegions } from '@/services/api';

import { equal } from '@/utils';

const { reducer, actions } = createSlice({
  name: 'regions',
  initialState: {
    regions: [],
    selectedRegion: null,
    regionsError: '',
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

    setRegionsError(state, { payload: regionsError }) {
      return {
        ...state,
        regionsError,
      };
    },
  },
});

export const {
  setRegions,
  selectRegion,
  setRegionsError,
} = actions;

export function loadRegions() {
  return async (dispatch) => {
    try {
      const regions = await fetchRegions();
      dispatch(setRegions(regions));
      dispatch(setRegionsError(''));
    } catch (e) {
      dispatch(setRegionsError(e.message));
    }
  };
}

export const selectRegions = (state) => state.regions.regions;

export const selectSelectedRegion = (state) => state.regions.selectedRegion;

export const selectRegionsError = (state) => state.regions.regionsError;

export default reducer;
