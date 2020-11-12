import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  setAccessToken,
  requestLogin,
} from './slice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../services/api');

describe('actions', () => {
  let store;

  describe('requestLogin', () => {
    beforeEach(() => {
      store = mockStore({
        loginFields: { email: '', password: '' },
      });
    });

    it('dispatchs setAccessToken', async () => {
      await store.dispatch(requestLogin());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken({}));
    });
  });
});
