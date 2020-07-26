import React from 'react';

import { useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import LogoutPage from './LogoutPage';

const mockHistoryPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('LogoutPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('direct dispatch logout', () => {
    render((
      <LogoutPage />
    ));
    expect(dispatch).toBeCalled();
    expect(mockHistoryPush).toHaveBeenCalledWith('/login');
  });
});
