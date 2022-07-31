import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { fetchRegions } from '@/services/api';

import reducer, {
  loadRegions,
  selectRegion,
  setRegions,
} from './regionsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/services/api');

describe('regionsSlice', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when previous state is undefined', () => {
    const initialState = {
      regions: {
        data: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: '',
      },
      selectedRegion: null,
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('loadRegions', () => {
    let store;

    context('when succeeded', () => {
      beforeEach(() => {
        fetchRegions.mockResolvedValue([]);
        store = mockStore({});
      });

      it('dispatches pending and fulfilled', async () => {
        await store.dispatch(loadRegions());

        const actions = store.getActions();

        expect(actions[0].type).toEqual(loadRegions.pending.type);
        expect(actions[1]).toEqual(
          expect.objectContaining({
            type: loadRegions.fulfilled.type,
            payload: [],
          }),
        );
      });
    });

    context('when failed', () => {
      beforeEach(() => {
        fetchRegions.mockRejectedValue(new Error());
        store = mockStore({});
      });

      it('dispatches pending and rejected', async () => {
        await store.dispatch(loadRegions());

        const actions = store.getActions();

        expect(actions[0].type).toEqual(loadRegions.pending.type);
        expect(actions[1].type).toEqual(loadRegions.rejected.type);
      });
    });

    describe('pending', () => {
      it('changes status(loading)', () => {
        const initialState = {
          regions: {
            data: [],
            status: 'idle',
            error: '',
          },
        };

        const state = reducer(initialState, loadRegions.pending());

        expect(state.regions.status).toBe('loading');
      });
    });

    describe('fulfilled', () => {
      it('changes regions and status(succeeded)', () => {
        const initialState = {
          regions: {
            data: [],
            status: 'idle',
            error: '',
          },
        };

        const regions = [
          { id: 1, name: '서울' },
        ];

        const state = reducer(initialState, loadRegions.fulfilled(regions));

        expect(state.regions.data).toBe(regions);
        expect(state.regions.status).toBe('succeeded');
      });
    });

    describe('rejected', () => {
      it('changes error and status(failed)', () => {
        const initialState = {
          regions: {
            data: [],
            status: 'idle',
            error: '',
          },
        };

        const errorMessage = '지역 목록을 불러오지 못했습니다.';

        const state = reducer(initialState, loadRegions.rejected(new Error(errorMessage)));

        expect(state.regions.status).toBe('failed');
        expect(state.regions.error).toBe(errorMessage);
      });
    });
  });
});
