import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RoutePage from './RoutePage';

jest.mock('react-redux');

describe('RoutePage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));
  });

  it('render RoutePage', () => {
    render((
      <MemoryRouter>
        <RoutePage />
      </MemoryRouter>
    ));
  });
  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders “Log in” button', () => {
      const { container } = render((
        <MemoryRouter>
          <RoutePage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log in');
    });
  });
  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders “Log out” button', () => {
      const { container } = render((
        <MemoryRouter>
          <RoutePage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log out');
    });
  });
});
