import { createSlice } from '@reduxjs/toolkit';

import { fetchRegions } from '@/services/api';

const { reducer, actions } = createSlice({
  name: 'regions',
  initialState: {
    regions: [],
  },
  reducers: {
    setRegions(state, { payload: regions }) {
      return {
        ...state,
        regions,
      };
    },
  },
});

export const {
  setRegions,
} = actions;

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export const selectRegions = (state) => state.regions.regions;

export default reducer;
