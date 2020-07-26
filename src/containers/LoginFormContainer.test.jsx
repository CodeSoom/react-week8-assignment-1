import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

const mockHistoryPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders input controls', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      expect(getByLabelText('E-mail').value).toBe('test@test');
      expect(getByLabelText('Password').value).toBe('1234');
    });

    it('listens change events', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'application/changeLoginField',
        payload: { name: 'email', value: 'new email' },
      });
    });

    it('renders “Log In” button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
      expect(mockHistoryPush).toHaveBeenCalledWith('/restaurants');
    });
  });
});
