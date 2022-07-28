import appReducer, { setAccessToken } from './appSlice';

describe('appReducer', () => {
  it('has initial state', () => {
    expect(appReducer(undefined, { type: 'app/action' })).toEqual({
      accessToken: '',
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const state = appReducer({ accessToken: '' }, setAccessToken('ACCESS_TOKEN'));

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });
});
