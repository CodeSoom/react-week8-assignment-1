import { createSlice } from '@reduxjs/toolkit';

import { fetchRegions } from '../../services/api';

import { equal } from '../../utils';

const slice = createSlice({
  name: 'regions',
  initialState: {
    regions: [],
    selectedRegion: null,
  },
  reducers: {
    setRegions(state, { payload }) {
      return {
        ...state,
        regions: payload,
      };
    },

    selectRegion(state, { payload: { regionId } }) {
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
} = slice.actions;

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

// @TODO 중복되는 네이밍 수정
export const regionsSelector = (state) => state.regions.regions;
export const selectedRegionSelector = (state) => state.regions.selectedRegion;

export default slice.reducer;
