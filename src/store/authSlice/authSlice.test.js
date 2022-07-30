import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { postLogin } from '@/services/api';

import reducer, {
  changeLoginField,
  logout,
  requestLogin,
  setAccessToken,
  setLoginError,
} from './authSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('@/services/api');

describe('authSlice', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when previous state is undefined', () => {
    const initialState = {
      loginFields: {
        email: '',
        password: '',
      },
      accessToken: '',
      loginError: '',
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

  describe('setLoginError', () => {
    it('changes login error', () => {
      const initialState = {
        loginError: '',
      };

      const state = reducer(initialState, setLoginError('잘못된 접근입니다.'));

      expect(state.loginError).toBe('잘못된 접근입니다.');
    });
  });

  describe('requestLogin', () => {
    let store;

    context('with correct login fields', () => {
      beforeEach(() => {
        postLogin.mockResolvedValue('');

        store = mockStore({
          auth: {
            loginFields: {
              email: 'abc@test.com',
              password: 'password123',
            },
          },
        });
      });

      it('dispatchs setAccessToken', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setAccessToken(''));
        expect(actions[1]).toEqual(setLoginError(''));
      });
    });

    context('with invalid login fields', () => {
      const errorMessage = '잘못된 요청입니다.';

      beforeEach(() => {
        postLogin.mockRejectedValue(new Error(errorMessage));

        store = mockStore({
          auth: {
            loginFields: {
              email: 'invalid@invalid.com',
              password: 'password123',
            },
          },
        });
      });

      it('dispatches setLoginError', async () => {
        await store.dispatch(requestLogin());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setLoginError(errorMessage));
      });
    });
  });
});
