import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import reducer, {
  changeLoginField,
  setAccessToken,
  logout,
  requestLogin,
  deleteAccessToken,
} from './LoginSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('LoginSlice', () => {
  describe('reducer', () => {
    context('when previous state is undefined', () => {
      const initialState = {
        loginFields: {
          email: '',
          password: '',
        },
        accessToken: '',
      };

      it('returns initialState', () => {
        const state = reducer(undefined, { type: 'action' });

        expect(state).toEqual(initialState);
      });
    });

    describe('changeLoginField', () => {
      context('when email is changed', () => {
        it('changes only email field', () => {
          const initialState = {
            loginFields: {
              email: 'email',
              password: 'password',
            },
          };

          const state = reducer(
            initialState,
            changeLoginField({ name: 'email', value: 'test' }),
          );

          expect(state.loginFields.email).toBe('test');
          expect(state.loginFields.password).toBe('password');
        });
      });

      context('when password is changed', () => {
        it('changes only password field', () => {
          const initialState = {
            loginFields: {
              email: 'email',
              password: 'password',
            },
          };

          const state = reducer(
            initialState,
            changeLoginField({ name: 'password', value: 'test' }),
          );

          expect(state.loginFields.email).toBe('email');
          expect(state.loginFields.password).toBe('test');
        });
      });
    });

    describe('setAccessToken', () => {
      it('changes access token', () => {
        const initialState = {
          accessToken: '',
        };

        const state = reducer(initialState, setAccessToken('TOKEN'));

        expect(state.accessToken).toBe('TOKEN');
      });
    });

    describe('logout', () => {
      it('clears access token', () => {
        const initialState = {
          accessToken: 'ACCESS_TOKEN',
        };

        const state = reducer(initialState, logout());

        expect(state.accessToken).toBe('');
      });
    });
  });

  describe('actions', () => {
    let store;

    describe('requestLogin', () => {
      beforeEach(() => {
        store = mockStore({
          Login: {
            loginFields: { email: '', password: '' },
          },
        });
      });

      it('dispatchs setAccessToken', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken({}));
      });
    });

    describe('deleteAccessToken', () => {
      beforeEach(() => {
        store = mockStore({});
      });

      it('dispatchs logout', () => {
        store.dispatch(deleteAccessToken());

        const actions = store.getActions();

        expect(actions[0]).toEqual(logout());
      });
    });
  });
});
