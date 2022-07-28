import loginReducer, { changeFields } from './loginSlice';

describe('loginReducer', () => {
  it('has initial state', () => {
    expect(loginReducer(undefined, { type: 'login/action' })).toEqual({
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

      const state = loginReducer(prevState, changeFields({
        name: 'email',
        value: 'tester@example.com',
      }));

      expect(state.fields).toEqual({
        email: 'tester@example.com',
        password: '',
      });
    });
  });
});
