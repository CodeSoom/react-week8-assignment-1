import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  changeFields,
  setAccessToken,
  logout,
  requestLogin,
  requestLogout,
} from './loginSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('loginSlice', () => {
  let store;

  it('has initial state', () => {
    expect(reducer(undefined, { type: 'login/action' })).toEqual({
      accessToken: '',
      fields: {
        email: '',
        password: '',
      },
    });
  });

  describe('changeFields', () => {
    it('changes fields', () => {
      const prevState = {
        fields: {
          email: '',
          password: '',
        },
      };

      const state = reducer(prevState, changeFields({
        name: 'email',
        value: 'tester@example.com',
      }));

      expect(state.fields).toEqual({
        email: 'tester@example.com',
        password: '',
      });
    });
  });

  describe('setAccessToken', () => {
    it('changes accessToken', () => {
      const prevState = {
        accessToken: '',
      };

      const state = reducer(prevState, setAccessToken('ACCESS_TOKEN'));

      expect(state.accessToken).toBe('ACCESS_TOKEN');
    });
  });

  describe('logout', () => {
    it('clears accessToken', () => {
      const prevState = {
        accessToken: 'ACCESS_TOKEN',
      };

      const state = reducer(prevState, logout());

      expect(state.accessToken).toBe('');
    });
  });

  describe('requestLogout', () => {
    beforeEach(() => {
      store = mockStore({
        login: {
          accessToken: 'ACCESS_TOKEN',
        },
      });
    });

    it('dispatches logout', () => {
      store.dispatch(requestLogout());

      const actions = store.getActions();

      expect(actions[0]).toEqual(logout());
    });
  });

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({
        login: {
          fields: { email: '', password: '' },
        },
      });
    });

    it('dispatches setAccessToken', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken({}));
    });
  });
});
