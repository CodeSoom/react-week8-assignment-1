import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
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

    it('renders Log-in title', () => {
      const { container } = render((
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log in');
    });

    it('renders input control', () => {
      const { getByLabelText } = render((
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      ));

      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
    });

    it('renders Log-in button', () => {
      const { container } = render((
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log In');
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders “Log out” title', () => {
      const { container } = render((
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log out');
    });

    it('renders “Log out” button', () => {
      const { container } = render((
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log out');
    });
  });
});
