import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import HomePage from './HomePage';

describe('HomePage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));
  });

  context('with accessToken', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders name and address', () => {
      const { container } = render((
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log Out');
      expect(container).not.toHaveTextContent('Log In');
    });
  });

  context('without accessToken', () => {
    given('accessToken', () => '');

    it('renders name and address', () => {
      const { container } = render((
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Log In');
      expect(container).not.toHaveTextContent('Log Out');
    });
  });
});
