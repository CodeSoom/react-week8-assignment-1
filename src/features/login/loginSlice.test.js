import reducer, { changeFields } from './loginSlice';

describe('loginSlice', () => {
  it('has initial state', () => {
    expect(reducer(undefined, { type: 'login/action' })).toEqual({
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
});
