import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LandingPage from './LandingPage';

test('HomePage', () => {
  render((
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  ));
});
