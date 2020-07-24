import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LandingPage from './LandingPage';

test('LandingPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  ));

  expect(getByText('Home')).not.toBeNull();
});
