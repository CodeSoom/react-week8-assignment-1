import { createSlice } from '@reduxjs/toolkit';

import { fetchRegions } from '@/services/api';

import { equal } from '@/utils';

const { reducer, actions } = createSlice({
  name: 'regions',
  initialState: {
    regions: [],
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
});

export const {
  setRegions,
  selectRegion,
} = actions;

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export const selectRegions = (state) => state.regions.regions;

export const selectSelectedRegion = (state) => state.regions.selectedRegion;

export default reducer;
